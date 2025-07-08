/**
 * Rounds a number up to the nearest integer.
 *
 * @param n - The number to round up.
 * @returns The number rounded up to the nearest integer.
 * @throws Will throw an error if n is NaN.
 *
 * @example
 * ceilValue(4.2); // 5
 *
 */
export function ceilValue(n: number): number {
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }
  const result = Math.ceil(n);
  return result === -0 ? 0 : result;
}

