import { calculateProduct } from './calculateProduct';

/**
 * Calculates the geometric mean of an array of positive numbers.
 *
 * @param arr - The array of numbers to calculate the geometric mean from.
 * @returns The geometric mean of the array values. Returns NaN for empty arrays or if any number is non-positive.
 *
 * @example
 * // Basic usage
 * calculateGeometricMean([1, 3, 9, 27]); // Returns 6
 *
 * @example
 * // Contains zero or negative numbers
 * calculateGeometricMean([1, 0, 2]); // Returns NaN
 *
 * @note The geometric mean is only defined for positive numbers.
 *
 * @complexity O(n) where n is the length of the input array
 */
export function calculateGeometricMean(arr: number[]): number {
  if (arr.length === 0 || arr.some((num) => num <= 0)) {
    return NaN;
  }

  const product: number = calculateProduct(arr);
  return Math.pow(product, 1 / arr.length);
}

