import { deepEqual } from '.././objectFunctions/deepEqual';

/**
 * Finds the index of an element in an array using deep equality.
 *
 * @param arr - The array to search.
 * @param element - The element to find.
 * @returns The index of the element in the array, or -1 if not found.
 */
export function findIndexOfElement<T>(arr: T[], element: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (deepEqual(arr[i], element)) {
      return i;
    }
  }
  return -1;
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5];
// findIndexOfElement(numbers, 3); // 2
