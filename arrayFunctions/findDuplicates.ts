import { deepEqual } from '.././objectFunctions/deepEqual';

/**
 * Finds duplicate elements in an array.
 * 
 * @param arr - The array to search for duplicates.
 * @returns A new array containing the duplicate values.
 */
export function findDuplicates<T>(arr: T[]): T[] {
    const duplicates: T[] = [];
    const seen: T[] = [];

    for (const item of arr) {
        if (seen.some(seenItem => deepEqual(seenItem, item))) {
            if (!duplicates.some(duplicate => deepEqual(duplicate, item))) {
                duplicates.push(item);
            }
        } else {
            seen.push(item);
        }
    }

    return duplicates;
}

// Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// findDuplicates(numbers); // [2, 4]
