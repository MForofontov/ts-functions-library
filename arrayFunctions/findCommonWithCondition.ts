/**
 * Finds common elements between two arrays based on a provided condition and deep equality.
 * First identifies elements that exist in both arrays using JSON stringification for comparison,
 * then filters those common elements using the provided condition function.
 *
 * @param arr1 - The first array to compare.
 * @param arr2 - The second array to compare.
 * @param condition - A function that takes an element and returns a boolean indicating
 *                    whether it satisfies the condition.
 * @returns An array containing the common elements that satisfy the condition.
 *
 * @example
 * // Basic usage with objects
 * const array1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
 * const array2 = [{ a: 2 }, { a: 3 }, { a: 4 }];
 * const condition = (item: { a: number }) => item.a > 1;
 * findCommonWithCondition(array1, array2, condition); // Returns [{ a: 2 }, { a: 3 }]
 *
 * @example
 * // With primitive values
 * findCommonWithCondition([1, 2, 3], [2, 3, 4], x => x > 2); // Returns [3]
 *
 * @example
 * // Empty result when no common elements satisfy the condition
 * findCommonWithCondition([1, 2], [3, 4], x => x > 5); // Returns []
 *
 * @note This implementation uses JSON.stringify for deep equality comparison.
 * This has limitations with circular references and non-serializable values
 * like functions, undefined, or symbols.
 *
 * @complexity O(n + m) where n and m are the lengths of arr1 and arr2 respectively
 */
export function findCommonWithCondition<T>(
  arr1: T[],
  arr2: T[],
  condition: (item: T) => boolean,
): T[] {
  // Convert arr2 into a Set for faster lookup (with deep equality)
  const arr2Set = new Set(arr2.map((item) => JSON.stringify(item)));

  // First, find common elements, then apply the condition to those common elements
  return arr1
    .filter((item) => arr2Set.has(JSON.stringify(item))) // Find common elements
    .filter(condition); // Apply condition to the common elements only
}
