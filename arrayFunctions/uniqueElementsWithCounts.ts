import { deepEqual } from '../objectFunctions/deepEqual';

/**
 * Gets unique elements in an array and their counts using deep equality comparison.
 * Returns an array of objects containing each unique element and how many times it appears.
 *
 * @param arr - The array to analyze.
 * @returns An array of objects where each object contains a unique element and its count.
 *
 * @example
 * // Basic usage with primitive values
 * uniqueElementsWithCounts([1, 2, 2, 3, 3, 3]);
 * // Returns [{ element: 1, count: 1 }, { element: 2, count: 2 }, { element: 3, count: 3 }]
 *
 * @example
 * // With objects using deep equality
 * uniqueElementsWithCounts([{id: 1}, {id: 2}, {id: 1}]);
 * // Returns [{ element: {id: 1}, count: 2 }, { element: {id: 2}, count: 1 }]
 *
 * @example
 * // Empty array
 * uniqueElementsWithCounts([]); // Returns []
 *
 * @example
 * // With mixed data types
 * uniqueElementsWithCounts([1, '1', true, 1]);
 * // Returns [{ element: 1, count: 2 }, { element: '1', count: 1 }, { element: true, count: 1 }]
 *
 * @note This implementation uses deep equality comparison via the deepEqual function,
 * which makes it suitable for counting occurrences of complex objects and nested structures.
 * The order of elements in the result follows their first occurrence in the input array.
 *
 * @complexity O(n²) where n is the length of the input array, due to the find() method with deep equality checks
 */
export function uniqueElementsWithCounts<T>(
  arr: T[],
): { element: T; count: number }[] {
  const counts: { element: T; count: number }[] = [];
  arr.forEach((item) => {
    const existing = counts.find((entry) => deepEqual(entry.element, item));
    if (existing) {
      existing.count++;
    } else {
      counts.push({ element: item, count: 1 });
    }
  });
  return counts;
}
