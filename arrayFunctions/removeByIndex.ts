/**
 * Removes elements from an array by their indices.
 * 
 * @param arr - The array to remove elements from.
 * @param indices - The indices of elements to remove.
 * @returns A new array with the specified elements removed.
 */
export function removeByIndex<T>(arr: T[], indices: number[]): T[] {
    return arr.filter((_, index) => !indices.includes(index));
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5];
// removeByIndex(numbers, [1, 3]); // [1, 3, 5]
