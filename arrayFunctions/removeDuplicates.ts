import { deepEqual } from '../objectFunctions/deepEqual';

/**
 * Removes duplicates from an array using deep equality.
 *
 * @param arr - The array to process.
 * @returns A new array with duplicates removed.
 */
export function removeDuplicates<T>(arr: T[]): T[] {
  const uniqueItems: T[] = [];
  arr.forEach((item) => {
    if (!uniqueItems.some((existingItem) => deepEqual(existingItem, item))) {
      uniqueItems.push(item);
    }
  });
  return uniqueItems;
}

// Example usage:
// removeDuplicates([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]
// removeDuplicates([[1, 2], [1, 2], ['three', 'four']]); // [[1, 2], ['three', 'four']]
