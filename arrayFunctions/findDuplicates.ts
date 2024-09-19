/**
 * Finds duplicate elements in an array.
 * 
 * @param arr - The array to search for duplicates.
 * @returns A new array containing the duplicate values.
 */
export function findDuplicates<T>(arr: T[]): T[] {
    const seen = new Set<T>();
    const duplicates = new Set<T>();
    arr.forEach(value => {
        if (seen.has(value)) {
            duplicates.add(value);
        } else {
            seen.add(value);
        }
    });
    return Array.from(duplicates);
}

// Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// findDuplicates(numbers); // [2, 4]
