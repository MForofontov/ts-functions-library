/**
 * Calculates the Cartesian product of two or more arrays.
 * The Cartesian product of sets A and B is the set of all ordered pairs (a, b)
 * where a ∈ A and b ∈ B. For multiple sets, it extends to all possible combinations.
 *
 * @param arrays - The arrays to compute the Cartesian product of.
 * @returns An array containing all possible combinations of elements from the input arrays.
 *
 * @example
 * // Basic usage with two arrays
 * const colors = ['red', 'green'];
 * const sizes = ['S', 'M'];
 * cartesianProduct(colors, sizes);
 * // Returns: [['red', 'S'], ['red', 'M'], ['green', 'S'], ['green', 'M']]
 *
 * @example
 * // With three arrays
 * const colors = ['red', 'green'];
 * const sizes = ['S', 'M'];
 * const quantities = [1, 2];
 * cartesianProduct(colors, sizes, quantities);
 * // Returns: [
 * //   ['red', 'S', 1], ['red', 'S', 2], ['red', 'M', 1], ['red', 'M', 2],
 * //   ['green', 'S', 1], ['green', 'S', 2], ['green', 'M', 1], ['green', 'M', 2]
 * // ]
 *
 * @example
 * // Empty array handling
 * cartesianProduct([], [1, 2]); // Returns: []
 * cartesianProduct([1, 2], []); // Returns: []
 *
 * @note The function uses array.reduce() with flatMap and map to build
 * the combinations. The number of resulting combinations grows exponentially
 * with the number of input arrays and their sizes.
 *
 * @complexity O(n^m) where n is the average array length and m is the number of arrays
 */
type CartesianTuple<T extends unknown[][]> = { [K in keyof T]: T[K][number] };

export function cartesianProduct<T extends unknown[][]>(
  ...arrays: T
): CartesianTuple<T>[] {
  // Handle empty array case
  if (arrays.some((arr) => arr.length === 0)) {
    return [];
  }

  return arrays.reduce<CartesianTuple<T>[]>(
    (acc, arr) =>
      acc.flatMap((x) => arr.map((y) => [...x, y] as CartesianTuple<T>)),
    [[]] as unknown as CartesianTuple<T>[],
  );
}
