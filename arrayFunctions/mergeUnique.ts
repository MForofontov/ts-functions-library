import { deepEqual } from '.././objectFunctions/deepEqual';

/**
 * Merges two arrays and returns a new array with unique elements.
 * 
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns A new array containing unique elements from both arrays.
 */
export function mergeUnique<T>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];

    const addUnique = (arr: T[]) => {
        arr.forEach(item => {
            if (!result.some(existingItem => deepEqual(existingItem, item))) {
                result.push(item);
            }
        });
    };

    addUnique(arr1);
    addUnique(arr2);

    return result;
}

// Example usage:
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// mergeUnique(array1, array2); // [1, 2, 3, 4, 5, 6]