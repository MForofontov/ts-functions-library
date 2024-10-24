import { deepEqual } from '.././objectFunctions/deepEqual';

/**
 * Returns the intersection of two arrays, i.e., elements that are present in both arrays.
 * 
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns A new array containing the elements that exist in both arrays.
 * @throws Error if either array is not an array.
 */
export function arrayIntersection<T>(arr1: T[], arr2: T[]): T[] {
    // Validate input
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Both arguments must be arrays.');
    }

    // Create a Set to store deep-equal items from arr2
    const set2 = new Set<T>(arr2);

    // Filter arr1 to find common elements based on deep equality
    return arr1.filter(item1 => Array.from(set2).some(item2 => deepEqual(item1, item2)));
}

// Example usage:
// const arr1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
// const arr2 = [{ a: 2 }, { a: 3 }, { a: 4 }];
// arrayIntersection(arr1, arr2); // [{ a: 2 }, { a: 3 }]
