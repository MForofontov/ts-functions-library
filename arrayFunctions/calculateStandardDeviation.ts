import { calculateVariance } from './calculateVariance';

/**
 * Calculates the standard deviation of an array of numbers.
 *
 * @param arr - The array of numbers.
 * @returns The standard deviation of the numbers in the array.
 */
export function calculateStandardDeviation(arr: number[]): number {
  if (arr.length === 0) {
    return NaN;
  }

  const variance: number = calculateVariance(arr);
  return Math.sqrt(variance);
}

// Example usage:
// const values = [1, 2, 3, 4, 5];
// calculateStandardDeviation(values); // ~1.414
