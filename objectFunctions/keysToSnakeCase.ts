/**
 * Converts the keys of an object to snake_case.
 * 
 * This function recursively converts the keys of an object or array to snake_case.
 * 
 * @param {any} obj - The object to convert.
 * @returns {any} - A new object with keys converted to snake_case.
 * @throws {TypeError} - If the input is not an object or is null.
 * 
 * @example
 * const obj = { firstName: 'John', lastName: 'Doe' };
 * const result = keysToSnakeCase(obj);
 * // result: { first_name: 'John', last_name: 'Doe' }
 */
export function keysToSnakeCase(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(keysToSnakeCase);
    } else if (obj !== null && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                typeof key === 'string' ? key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`) : key,
                keysToSnakeCase(value)
            ])
        );
    }
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return obj;
}