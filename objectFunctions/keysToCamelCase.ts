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
export function keysToCamelCase(
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
          ? (/[-_]/.test(k) ? k.toLowerCase() : k).replace(
              /[-_]+([a-zA-Z0-9])/g,
              (_, char: string) => char.toUpperCase(),
            )
          : k,
        transform(v),
      ]);
      return Object.fromEntries(entries) as Record<string, unknown>;
    }
    return value;
  };

  return transform(obj) as typeof obj;
}
