/**
 * Calculates the cube root of a number.
 *
 * @param n - The number to find the cube root of.
 * @returns The cube root of the number.
 * @throws Will throw an error if n is NaN.
 */
export function calculateCubeRoot(n: number): number {
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }
  return Math.cbrt(n);
}

// Example usage:
// calculateCubeRoot(27); // 3
