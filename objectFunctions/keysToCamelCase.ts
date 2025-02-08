/**
 * Converts the keys of an object to camelCase.
 * 
 * @param {any} obj - The object to convert.
 * @returns {any} - A new object with keys converted to camelCase.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function keysToCamelCase(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(keysToCamelCase);
    } else if (obj !== null && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                key.replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', '')),
                keysToCamelCase(value)
            ])
        );
    }
    return obj;
}