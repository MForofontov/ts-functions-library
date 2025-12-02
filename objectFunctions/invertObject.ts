/**
 * Inverts the keys and values of an object. The returned object will have the
 * original object's values as keys and keys as values.
 *
 * @param obj - The object whose keys and values should be swapped.
 * @returns A new object with keys and values inverted.
 *
 * @example
 * // Basic usage
 * invertObject({ a: 1, b: 2 }); // Returns { '1': 'a', '2': 'b' }
 *
 * @example
 * // Duplicate values override previous keys
 * invertObject({ a: 1, b: 1 }); // Returns { '1': 'b' }
 *
 * @note Only the object's own enumerable properties are considered. If multiple
 * keys share the same value, the last key encountered will appear in the
 * returned object.
 *
 * @complexity O(n) where n is the number of keys in the input object.
 */
export function invertObject(
  obj: Record<string | number | symbol, unknown>,
): Record<string, string | number | symbol> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  const result: Record<string, string | number | symbol> = {};
  for (const key of Reflect.ownKeys(obj)) {
    const value = obj[key];
    result[String(value)] = key;
  }
  return result;
}
