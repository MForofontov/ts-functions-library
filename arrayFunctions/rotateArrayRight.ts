/**
 * Rotates the elements of an array to the right by a specified number of positions.
 * 
 * @param arr - The array to rotate.
 * @param positions - The number of positions to rotate to the right.
 * @returns A new array with elements rotated.
 */
export function rotateArrayRight<T>(arr: T[], positions: number): T[] {
    const len = arr.length;
    positions = positions % len; // Handle rotation larger than array length
    return arr.slice(-positions).concat(arr.slice(0, -positions));
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5];
// rotateArray(numbers, 2); // [4, 5, 1, 2, 3]
