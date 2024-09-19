/**
 * Finds the smallest element in an array of numbers.
 * 
 * @param arr - The array of numbers.
 * @returns The minimum value in the array.
 */
export function findMin(arr: number[]): number {
    return Math.min(...arr);
}

// Example usage:
// const values = [10, 22, 3, 14];
// findMin(values); // 3
