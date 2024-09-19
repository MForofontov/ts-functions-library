/**
 * Splits an array into chunks of a specified size.
 * 
 * @param arr - The array to be split into chunks.
 * @param size - The size of each chunk.
 * @returns A two-dimensional array with the elements divided into chunks.
 */
export function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// chunkArray(numbers, 3); // [[1, 2, 3], [4, 5, 6], [7]]

