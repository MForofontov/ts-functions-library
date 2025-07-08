/**
 * Checks if a number is odd.
 *
 * @param n - The number to check.
 * @returns True if the number is odd, false if it is even.
 * @throws Will throw an error if n is NaN or if n is not an integer.
 *
 * @example
 * isOdd(3); // true
 * isOdd(4); // false
 *
 */
export function isOdd(n: number): boolean {
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  return n % 2 !== 0;
}

