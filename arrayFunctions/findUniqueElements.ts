import { deepEqual } from '.././objectFunctions/deepEqual';

/**
 * Finds unique elements in an array using deep equality.
 *
 * @param arr - The array to search for unique elements.
 * @returns An array containing the unique elements.
 */
export function findUniqueElements<T>(arr: T[]): T[] {
  const uniqueElements: T[] = [];

  for (const item of arr) {
    if (!uniqueElements.some((uniqueItem) => deepEqual(uniqueItem, item))) {
      uniqueElements.push(item);
    }
  }

  return uniqueElements;
}

// Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// findUniqueElements(numbers); // [1, 2, 3, 4, 5]
