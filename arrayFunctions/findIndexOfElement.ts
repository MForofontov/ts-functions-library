/**
 * Finds the index of the first occurrence of a given element in an array.
 * 
 * @param arr - The array to search in.
 * @param element - The element to find.
 * @returns The index of the element, or -1 if not found.
 */
export function findIndexOfElement<T>(arr: T[], element: T): number {
    return arr.indexOf(element);
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5];
// findIndexOfElement(numbers, 3); // 2
