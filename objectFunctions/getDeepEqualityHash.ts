/**
 * Generates a numeric hash for an object based on its structure and values.
 * Useful for comparing objects or using objects as keys in collections.
 *
 * @param obj - The object to generate a hash for.
 * @returns A numeric hash code representing the object's content.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Objects with the same content produce the same hash
 * const hash1 = getDeepEqualityHash({ a: 1, b: [2, 3] });
 * const hash2 = getDeepEqualityHash({ a: 1, b: [2, 3] });
 * hash1 === hash2; // => true
 *
 * @note Uses JSON.stringify internally, so functions, undefined values,
 * and circular references are not supported.
 * @note Collision is possible, though unlikely for typical objects.
 */
export function getDeepEqualityHash(obj: unknown): number {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  return JSON.stringify(obj)
    .split('')
    .reduce((hash, char) => {
      return (hash << 5) - hash + char.charCodeAt(0);
    }, 0);
}
