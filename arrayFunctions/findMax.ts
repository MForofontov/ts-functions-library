/**
 * Finds the highest element in an array of numbers.
 *
 * @param arr - The array of numbers.
 * @returns The highest value in the array.
 */
export function findMax(arr: number[]): number {
  return Math.max(...arr);
}

// Example usage:
// const values = [10, 22, 3, 14];
// findMin(values); // 22
