/**
 * Calculates the product of an array of numbers.
 *
 * @param arr - The array of numbers.
 * @returns The product of all numbers in the array.
 */
export function calculateProduct(arr: number[]): number {
  return arr.reduce((product, num) => product * num, 1);
}

// Example usage:
// const values = [1, 2, 3, 4];
// productArray(values); // 24
