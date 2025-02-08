/**
 * Converts the keys of an object to snake_case.
 * 
 * @param {any} obj - The object to convert.
 * @returns {any} - A new object with keys converted to snake_case.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function keysToSnakeCase(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(keysToSnakeCase);
    } else if (obj !== null && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`),
                keysToSnakeCase(value)
            ])
        );
    }
    return obj;
}