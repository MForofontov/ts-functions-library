/**
 * Flattens a nested object.
 * 
 * @param {Record<string, any>} obj - The object to flatten.
 * @param {string} [prefix=''] - The prefix for the keys (used for recursion).
 * @returns {Record<string, any>} - The flattened object.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function flattenObject(obj: Record<string, any>, prefix = ''): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.keys(obj).reduce((acc, key) => {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(acc, flattenObject(obj[key], newKey));
        } else {
            acc[newKey] = obj[key];
        }
        return acc;
    }, {} as Record<string, any>);
}