/**
 * Checks if an object has no own enumerable properties.
 *
 * @param obj - The object to check for emptiness.
 * @returns True if the object has no own enumerable properties, false otherwise.
 * @throws When input is not a non-null object.
 *
 * @example
 * isObjectEmpty({}); // => true
 * isObjectEmpty({ a: 1 }); // => false
 *
 * @example
 * // Works with different object types
 * isObjectEmpty(new Object()); // => true
 * isObjectEmpty([]); // => true (empty arrays are also empty objects)
 *
 * @note This function only checks for own enumerable properties using Object.keys().
 * @note Non-enumerable properties and inherited properties are not considered.
 */
export function isObjectEmpty(obj: Record<string, unknown>): boolean {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  return Object.keys(obj).length === 0;
}
