/**
 * Returns the unique elements in an array.
 * 
 * @param arr - The array to find unique elements from.
 * @returns A new array with only unique values.
 */
export function findUniqueElements<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

// Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// findUniqueElements(numbers); // [1, 2, 3, 4, 5]
