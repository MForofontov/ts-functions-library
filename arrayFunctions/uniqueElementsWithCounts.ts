import { deepEqual } from '../objectFunctions/deepEqual';

/**
 * Gets unique elements in an array and their counts.
 *
 * @param arr - The array to analyze.
 * @returns An array of objects where each object contains a unique element and its count.
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

// Example usage:
// const numbers = [1, 2, 2, 3, 3, 3];
// uniqueElementsWithCounts(numbers); // [{ element: 1, count: 1 }, { element: 2, count: 2 }, { element: 3, count: 3 }]
