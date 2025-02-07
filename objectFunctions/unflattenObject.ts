/**
 * Unflattens a flattened object.
 * 
 * @param {Record<string, any>} obj - The flattened object to unflatten.
 * @returns {Record<string, any>} - The unflattened object.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function unflattenObject(obj: Record<string, any>): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.keys(obj).reduce((acc, key) => {
        const keys = key.split('.');
        keys.reduce((nested, k, i) => {
            return (nested[k] = i === keys.length - 1 ? obj[key] : nested[k] || {});
        }, acc);
        return acc;
    }, {} as Record<string, any>);
}