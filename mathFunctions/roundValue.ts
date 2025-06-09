/**
 * Rounds a number to the nearest integer.
 *
 * @param n - The number to round.
 * @returns The number rounded to the nearest integer.
 * @throws Will throw an error if n is NaN.
 */
export function roundValue(n: number): number {
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }
  const result = Math.round(n);
  return result === -0 ? 0 : result;
}

// Example usage:
// roundValue(4.5); // 5
