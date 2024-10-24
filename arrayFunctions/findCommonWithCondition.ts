import { deepEqual } from '.././objectFunctions/deepEqual';

/**
 * Finds common elements between two arrays based on a provided condition and deep equality.
 * 
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @param condition - A function that takes an element and returns a boolean indicating whether it satisfies the condition.
 * @returns An array containing the common elements that satisfy the condition.
 */
export function findCommonWithCondition<T>(arr1: T[], arr2: T[], condition: (item: T) => boolean): T[] {
    // Convert arr2 into a Set for faster lookup (with deep equality)
    const arr2Set = new Set(arr2.map(item => JSON.stringify(item)));

    // First, find common elements, then apply the condition to those common elements
    return arr1.filter(item => arr2Set.has(JSON.stringify(item)))  // Find common elements
               .filter(condition);  // Apply condition to the common elements only
}

// Example usage:
// const array1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
// const array2 = [{ a: 2 }, { a: 3 }, { a: 4 }];
// const condition = (item: { a: number }) => item.a > 1;
// findCommonWithCondition(array1, array2, condition); // [{ a: 2 }, { a: 3 }]