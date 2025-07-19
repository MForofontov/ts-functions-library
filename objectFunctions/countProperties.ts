/**
 * Counts the number of own enumerable properties in an object.
 *
 * @param obj - The object to count properties of.
 * @returns The total number of properties in the object.
 * @throws When input is not a non-null object.
 *
 * @example
 * const count = countProperties({ a: 1, b: 2, c: 3 });
 * // => 3
 */
export function countProperties(obj: Record<string, unknown>): number {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  return Object.keys(obj).length;
}
