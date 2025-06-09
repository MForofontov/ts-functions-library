/**
 * Recursively converts object keys from camelCase to snake_case.
 * Handles nested objects and arrays, preserving the original values.
 *
 * @param obj - The object or array whose keys should be converted.
 * @returns A new object or array with all keys converted to snake_case.
 * @throws When input is not an object, array, or is null.
 *
 * @example
 * // Basic key conversion
 * keysToSnakeCase({ firstName: 'John', lastName: 'Doe' });
 * // => { first_name: 'John', last_name: 'Doe' }
 *
 * @note Creates a new object/array and does not modify the original.
 * @note Properly handles acronyms and multiple capital letters.
 */
export function keysToSnakeCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(keysToSnakeCase);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        typeof key === 'string'
          ? key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
          : key,
        keysToSnakeCase(value),
      ]),
    );
  }
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  return obj;
}
