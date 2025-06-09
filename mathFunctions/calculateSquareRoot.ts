/**
 * Calculates the square root of a number.
 *
 * @param n - The number to find the square root of.
 * @returns The square root of the number.
 * @throws Will throw an error if n is negative or if n is NaN.
 */
export function calculateSquareRoot(n: number): number {
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }
  if (n < 0) {
    throw new Error('Input must be a non-negative number');
  }
  return Math.sqrt(n);
}

// Example usage:
// calculateSquareRoot(9); // 3
