/**
 * Removes duplicates from an array.
 * 
 * @param arr - The array to process.
 * @returns A new array with duplicates removed.
 */
export function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

// Example usage:
// removeDuplicates([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]