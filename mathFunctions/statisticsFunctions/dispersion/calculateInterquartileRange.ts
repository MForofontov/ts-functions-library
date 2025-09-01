import { calculateMedian } from '../centralTendency/calculateMedian';

/**
 * Calculates the interquartile range (IQR) of a numeric array.
 * The IQR is the difference between the third quartile (Q3) and the first quartile (Q1).
 *
 * @param arr - The array of numbers to calculate the IQR from.
 * @returns The interquartile range. Returns NaN for empty arrays.
 *
 * @example
 * // Basic usage
 * calculateInterquartileRange([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Returns 4
 *
 * @example
 * // Empty array
 * calculateInterquartileRange([]); // Returns NaN
 *
 * @note This function sorts the input array and uses calculateMedian for quartile calculation.
 *
 * @complexity O(n log n) where n is the length of the input array (due to sorting)
 */
export function calculateInterquartileRange(arr: number[]): number {
  if (arr.length === 0) {
    return NaN;
  }

  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const lower = sorted.slice(0, mid);
  const upper =
    sorted.length % 2 === 0 ? sorted.slice(mid) : sorted.slice(mid + 1);
  const q1 = calculateMedian(lower);
  const q3 = calculateMedian(upper);
  return q3 - q1;
}
