/**
 * Zips multiple arrays together by combining elements at the same indices.
 * Creates a new array where each element is an array containing corresponding elements
 * from all input arrays. The result will have the length of the shortest input array.
 *
 * @param arrays - The arrays to zip together.
 * @returns A new array where each element is an array containing the elements from the input arrays at the same index.
 *
 * @example
 * // Basic usage with two arrays
 * const names = ['Alice', 'Bob', 'Charlie'];
 * const ages = [25, 30, 35];
 * zipMultiple(names, ages); // Returns [['Alice', 25], ['Bob', 30], ['Charlie', 35]]
 *
 * @example
 * // With three arrays
 * const names = ['Alice', 'Bob', 'Charlie'];
 * const ages = [25, 30, 35];
 * const cities = ['New York', 'Los Angeles', 'Chicago'];
 * zipMultiple(names, ages, cities);
 * // Returns [['Alice', 25, 'New York'], ['Bob', 30, 'Los Angeles'], ['Charlie', 35, 'Chicago']]
 *
 * @example
 * // With arrays of different lengths
 * const letters = ['a', 'b', 'c', 'd'];
 * const numbers = [1, 2, 3];
 * zipMultiple(letters, numbers); // Returns [['a', 1], ['b', 2], ['c', 3]]
 *
 * @example
 * // With empty arrays
 * zipMultiple([], [1, 2, 3]); // Returns []
 *
 * @note This function truncates to the length of the shortest input array.
 * Elements from longer arrays that don't have corresponding elements in the
 * shortest array will be ignored.
 *
 * @complexity O(n*m) where n is the length of the shortest array and m is the number of arrays
 */
type ZippedTuple<T extends any[][]> = { [K in keyof T]: T[K][number] };

export function zipMultiple<T extends any[][]>(...arrays: T): ZippedTuple<T>[] {
  const minLength = Math.min(...arrays.map((arr) => arr.length));
  const result: ZippedTuple<T>[] = [];
  for (let i = 0; i < minLength; i++) {
    result.push(arrays.map((arr) => arr[i]) as ZippedTuple<T>);
  }
  return result;
}
