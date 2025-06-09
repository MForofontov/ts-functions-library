import { calculateAverage } from './calculateAverage';

/**
 * Calculates the variance of an array of numbers.
 *
 * @param arr - The array of numbers.
 * @returns The variance of the numbers in the array.
 */
export function calculateVariance(arr: number[]): number {
  if (arr.length === 0) {
    return NaN;
  }

  const mean: number = calculateAverage(arr);
  const sumOfSquares: number = arr.reduce(
    (sum, num) => sum + Math.pow(num - mean, 2),
    0,
  );
  return sumOfSquares / arr.length;
}

// Example usage:
// const values = [1, 2, 3, 4, 5];
// calculateVariance(values); // 2
