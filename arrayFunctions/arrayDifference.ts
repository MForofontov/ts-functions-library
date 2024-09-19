/**
 * Finds the difference between two arrays (i.e., elements in the first array that are not in the second).
 * 
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing elements that are in the first array but not in the second.
 */
export function arrayDifference<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(item => !arr2.includes(item));
}

// Example usage:
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// arrayDifference(array1, array2); // [1, 2]
