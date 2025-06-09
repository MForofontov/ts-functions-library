/**
 * Flattens a multi-dimensional array into a one-dimensional array.
 * Recursively processes nested arrays at any depth level.
 *
 * @param arr - The nested array to flatten.
 * @returns A new one-dimensional array containing all elements from the nested structure.
 *
 * @example
 * // Basic usage
 * flattenArray([1, [2, [3, 4], 5], 6]); // Returns [1, 2, 3, 4, 5, 6]
 *
 * @example
 * // With empty arrays
 * flattenArray([1, [], 2, [3, []]]); // Returns [1, 2, 3]
 *
 * @example
 * // With mixed data types
 * flattenArray(['a', [1, [true, null]], {key: 'value'}]); // Returns ['a', 1, true, null, {key: 'value'}]
 *
 * @example
 * // Already flat array
 * flattenArray([1, 2, 3]); // Returns [1, 2, 3]
 *
 * @note This implementation uses recursion, which may cause stack overflow errors
 * for extremely deep nested arrays. The function handles arrays of any depth.
 *
 * @complexity O(n) where n is the total number of elements in all nested arrays
 */
export function flattenArray<T>(arr: any[]): T[] {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
    [],
  );
}
