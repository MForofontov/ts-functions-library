/**
 * Finds common elements between two arrays based on a condition.
 * 
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @param condition - The condition to check for common elements.
 * @returns An array of elements that meet the condition and are present in both arrays.
 */
export function findCommonWithCondition<T>(arr1: T[], arr2: T[], condition: (item: T) => boolean): T[] {
    return arr1.filter(item => arr2.includes(item) && condition(item));
}

// Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// findCommonWithCondition(array1, array2, x => x > 3); // [4, 5]
