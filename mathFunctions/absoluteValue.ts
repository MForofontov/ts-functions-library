/**
 * Calculates the absolute value of a number.
 *
 * @param n - The number to find the absolute value of.
 * @returns The absolute value of the number.
 *
 * @example
 * absoluteValue(-5); // 5
 *
 */
export function absoluteValue(n: number): number {
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }

  return Math.abs(n);
}

