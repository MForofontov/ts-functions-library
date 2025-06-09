/**
 * Calculates the nth triangular number.
 *
 * @param n - The position in the triangular number sequence.
 * @returns The nth triangular number.
 * @throws Will throw an error if n is not an integer or if n is negative.
 */
export function calculateTriangularNumber(n: number): number {
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  if (n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  return (n * (n + 1)) / 2;
}

// Example usage:
// calculateTriangularNumber(5); // 15
