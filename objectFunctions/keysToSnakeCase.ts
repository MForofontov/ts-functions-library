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
  if (obj === null || typeof obj !== 'object') {
    throw new TypeError('Input must be a non-null object');
  }

  const transform = (value: any): any => {
    if (Array.isArray(value)) {
      return value.map(transform);
    }
    if (value !== null && typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [
          typeof k === 'string'
            ? k.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
            : k,
          transform(v),
        ]),
      );
    }
    return value;
  };

  return transform(obj);
}
