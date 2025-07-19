/**
 * Determines if an object is a deep subset of another object.
 * A subset must have all its properties and nested structures match
 * the corresponding properties in the target object.
 *
 * @param subset - The object to check if it's a subset.
 * @param obj - The target object to check against.
 * @returns True if all properties in subset exist with identical values in obj, false otherwise.
 * @throws When either input is not a non-null object.
 *
 * @example
 * // Basic subset check
 * isDeepSubset({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }); // => true
 * isDeepSubset({ a: 1, b: 3 }, { a: 1, b: 2, c: 3 }); // => false
 *
 * @note Uses strict equality (===) for comparing primitive values.
 * @note Recursively checks nested objects for subset relationship.
 * @note Does not handle array comparisons specially - arrays are treated as objects.
 */
export function isDeepSubset<T extends Record<string, unknown>>(
  subset: T,
  obj: T,
): boolean {
  if (typeof subset !== 'object' || subset === null) {
    throw new TypeError('Subset must be a non-null object');
  }
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Object must be a non-null object');
  }

  return Object.keys(subset).every((key) =>
    typeof subset[key] === 'object' && subset[key] !== null
      ? isDeepSubset(
          subset[key] as Record<string, unknown>,
          obj[key] as Record<string, unknown>,
        )
      : subset[key] === obj[key],
  );
}
