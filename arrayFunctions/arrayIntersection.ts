import { deepEqual } from '../objectFunctions/deepEqual';

/**
 * Returns the intersection of two arrays (elements that are present in both arrays).
 * Uses deep equality comparison to determine if elements match.
 *
 * @param arr1 - The first array to compare.
 * @param arr2 - The second array to compare.
 * @returns A new array containing only the elements that exist in both input arrays.
 * @throws Error if either input is not an array.
 *
 * @example
 * // Basic usage with primitive values
 * arrayIntersection([1, 2, 3], [2, 3, 4]); // Returns [2, 3]
 *
 * @example
 * // Works with objects using deep equality
 * const arr1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
 * const arr2 = [{ a: 2 }, { a: 3 }, { a: 4 }];
 * arrayIntersection(arr1, arr2); // Returns [{ a: 2 }, { a: 3 }]
 *
 * @example
 * // Empty arrays
 * arrayIntersection([], [1, 2]); // Returns []
 * arrayIntersection([1, 2], []); // Returns []
 *
 * @note This implementation converts arr2 to a Set but still uses deep equality,
 * which has O(n*m) complexity. For large arrays with primitive values,
 * a standard Set-based approach would be more efficient.
 *
 * @complexity O(n*m) where n is the length of arr1 and m is the length of arr2
 */
export function arrayIntersection<T>(arr1: T[], arr2: T[]): T[] {
  // Validate input
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('Both arguments must be arrays.');
  }

  // Create a Set to store deep-equal items from arr2
  const set2 = new Set<T>(arr2);

  // Filter arr1 to find common elements based on deep equality
  return arr1.filter((item1) =>
    Array.from(set2).some((item2) => deepEqual(item1, item2)),
  );
}
