// Example usage:
// const values = [1, 2, 2, 3, 3, 4];
// calculateMode(values); // [2, 3]

/**
 * Calculates the range of an array of numbers.
 *
 * @param arr - The array of numbers.
 * @returns The range of the numbers in the array.
 */
export function calculateRange(arr: number[]): number {
  if (arr.length === 0) {
    return NaN;
  }

  const min: number = Math.min(...arr);
  const max: number = Math.max(...arr);
  return max - min;
}

// Example usage:
// const values = [1, 3, 5, 7];
// calculateRange(values); // 6
