/**
 * Calculates the harmonic mean of an array of numbers.
 * The harmonic mean is useful for rates and ratios.
 *
 * @param arr - The array of numbers to calculate the harmonic mean from.
 * @returns The harmonic mean of the numbers. Returns NaN for empty arrays or if any value is zero.
 *
 * @example
 * // Basic usage
 * calculateHarmonicMean([1, 2, 4]); // Returns ~1.714
 *
 * @example
 * // Contains zero
 * calculateHarmonicMean([1, 0, 2]); // Returns NaN
 *
 * @note The harmonic mean is not defined for arrays containing zero.
 *
 * @complexity O(n) where n is the length of the input array
 */
export function calculateHarmonicMean(arr: number[]): number {
  if (arr.length === 0 || arr.some((num) => num === 0)) {
    return NaN;
  }

  const reciprocalSum: number = arr.reduce((sum, num) => sum + 1 / num, 0);
  return arr.length / reciprocalSum;
}
