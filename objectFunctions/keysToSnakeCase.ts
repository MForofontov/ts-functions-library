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
 * @note Treats consecutive capital letters as a single word when converting.
 */
export function keysToSnakeCase(
  obj: Record<string, unknown> | unknown[],
): Record<string, unknown> | unknown[] {
  if (obj === null || typeof obj !== 'object') {
    throw new TypeError('Input must be a non-null object');
  }

  const transform = (value: unknown): unknown => {
    if (Array.isArray(value)) {
      return value.map((v) => transform(v));
    }
    if (value !== null && typeof value === 'object') {
      const entries = Object.entries(value).map(([k, v]) => [
        typeof k === 'string'
          ? k
              .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
              .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
              .toLowerCase()
          : k,
        transform(v),
      ]);
      return Object.fromEntries(entries) as Record<string, unknown>;
    }
    return value;
  };

  return transform(obj) as typeof obj;
}
