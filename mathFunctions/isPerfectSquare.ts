/**
 * Checks if a number is a perfect square.
 *
 * @param n - The number to check.
 * @returns True if the number is a perfect square, false otherwise.
 */
export function isPerfectSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n));
}

// Example usage:
// isPerfectSquare(16); // true
// isPerfectSquare(15); // false
