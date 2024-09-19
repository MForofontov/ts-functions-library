/**
 * Calculates the sum of all elements in a number array.
 * 
 * @param arr - The array of numbers to sum.
 * @returns The sum of the elements in the array.
 */
export function sumArrayElements(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5];
// sumArrayElements(numbers); // 15
