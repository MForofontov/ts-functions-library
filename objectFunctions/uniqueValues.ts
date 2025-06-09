/**
 * Extracts all unique values from an object, removing any duplicates.
 *
 * @param obj - The object to extract values from.
 * @returns An array containing only the unique values from the object.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Basic usage with duplicates
 * const obj = { a: 1, b: 2, c: 1, d: 3 };
 * uniqueValues(obj);
 * // => [1, 2, 3]
 *
 * @example
 * // With mixed value types
 * const mixed = { id: 1, name: 'Product', active: true, category: 'A', tag: 'A' };
 * uniqueValues(mixed);
 * // => [1, 'Product', true, 'A']
 *
 * @note Uses Set for uniqueness, which works well for primitive values but uses
 *       reference equality for objects and arrays.
 * @note The order of values in the result follows their first occurrence in Object.values().
 */
export function uniqueValues<T extends Record<string, any>>(obj: T): any[] {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }

  return [...new Set(Object.values(obj))];
}
