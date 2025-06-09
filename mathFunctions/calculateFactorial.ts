/**
 * Calculates the factorial of a number.
 *
 * @param n - The number to calculate the factorial of.
 * @returns The factorial of the number.
 * @throws Will throw an error if n is not an integer, if n is NaN, or if n is negative.
 */
export function calculateFactorial(n: number): number {
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  if (n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  if (n === 0) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

// Example usage:
// calculateFactorial(5); // 120
