/**
 * Recursively converts object keys from snake_case or kebab-case to camelCase.
 * Handles nested objects and arrays, preserving the original values.
 * 
 * @param obj - The object or array whose keys should be converted.
 * @returns A new object or array with all keys converted to camelCase.
 * @throws When input is not an object, array, or is null.
 * 
 * @example
 * // Basic key conversion
 * keysToCamelCase({ 'first_name': 'John', 'last_name': 'Doe' });
 * // => { firstName: 'John', lastName: 'Doe' }
 * 
 * @note Converts both snake_case and kebab-case to camelCase.
 * @note Creates a new object/array and does not modify the original.
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
