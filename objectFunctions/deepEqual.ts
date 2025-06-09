/**
 * Performs a deep equality comparison between two values of any type.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` if the values are deeply equal, `false` otherwise.
 *
 * @example
 * // Objects with nested structures
 * deepEqual({a: {b: 1}}, {a: {b: 1}}); // => true
 * deepEqual({a: {b: 1}}, {a: {b: 2}}); // => false
 *
 * @note Handles primitive types, objects, arrays, NaN, Dates, and RegExp objects.
 * Does not support Maps, Sets, or detecting circular references.
 */
export function deepEqual(a: any, b: any): boolean {
  // Special case for NaN
  if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
    return true;
  }

  // If both values are strictly equal, they are deeply equal.
  if (a === b) return true;

  // If either value is not an object or is null, they are not deeply equal.
  if (
    typeof a !== 'object' ||
    typeof b !== 'object' ||
    a === null ||
    b === null
  ) {
    return false;
  }

  // Special case for Date objects
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // Special case for RegExp objects
  if (a instanceof RegExp && b instanceof RegExp) {
    return a.source === b.source && a.flags === b.flags;
  }

  // If one is a Date and the other is a RegExp, they are not deeply equal
  if (
    (a instanceof Date && b instanceof RegExp) ||
    (a instanceof RegExp && b instanceof Date)
  ) {
    return false;
  }

  // Special case for boolean values
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a === b;
  }

  // Get the keys of both objects.
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // If the objects have different numbers of keys, they are not deeply equal.
  if (keysA.length !== keysB.length) return false;

  // Recursively compare each key and value in both objects.
  for (const key of keysA) {
    // If the key is not present in both objects or the values are not deeply equal, return false.
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  // If all keys and values are deeply equal, return true.

  return true;
}
