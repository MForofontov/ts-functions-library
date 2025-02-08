/**
 * Converts the keys of an object to camelCase.
 * 
 * This function recursively converts the keys of an object or array to camelCase.
 * 
 * @param {any} obj - The object to convert.
 * @returns {any} - A new object with keys converted to camelCase.
 * @throws {TypeError} - If the input is not an object or is null.
 * 
 * @example
 * const obj = { 'first_name': 'John', 'last_name': 'Doe' };
 * const result = keysToCamelCase(obj);
 * // result: { firstName: 'John', lastName: 'Doe' }
 */
export function keysToCamelCase(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(keysToCamelCase);
    } else if (obj !== null && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                typeof key === 'string' ? key.replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', '')) : key,
                keysToCamelCase(value)
            ])
        );
    }
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return obj;
}