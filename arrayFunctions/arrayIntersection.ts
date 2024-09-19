/**
 * Returns the intersection of two arrays, i.e., elements that are present in both arrays.
 * 
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns A new array containing the elements that exist in both arrays.
 */
export function arrayIntersection<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(value => arr2.includes(value));
}

// Example usage:
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];
// arrayIntersection(arr1, arr2); // [3, 4]

