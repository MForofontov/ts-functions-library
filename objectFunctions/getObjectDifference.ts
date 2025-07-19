/**
 * Returns an object containing properties that differ between two objects,
 * using values from the second object when they differ.
 *
 * @param obj1 - The first object for comparison.
 * @param obj2 - The second object for comparison.
 * @returns An object containing keys where values differ, using obj2's values.
 * @throws When either input is not a non-null object.
 *
 * @example
 * // Different values and unique properties
 * const obj1 = { a: 1, b: 2, c: 3 };
 * const obj2 = { a: 1, b: 4, d: 5 };
 * getObjectDifference(obj1, obj2);
 * // => { b: 4, c: undefined, d: 5 }
 *
 * @note Uses shallow equality (===) for comparison. Objects and arrays
 * are only equal if they are the same reference.
 * @note Keys that exist only in obj1 will appear with undefined values in the result.
 */
export function getObjectDifference(
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>,
): Record<string, unknown> {
  if (
    typeof obj1 !== 'object' ||
    obj1 === null ||
    typeof obj2 !== 'object' ||
    obj2 === null
  ) {
    throw new TypeError('Both inputs must be non-null objects');
  }

  const diff: Record<string, unknown> = {};

  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  allKeys.forEach((key) => {
    if (obj1[key] !== obj2[key]) {
      diff[key] = obj2[key];
    }
  });

  return diff;
}
