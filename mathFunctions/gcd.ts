/**
 * Calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The greatest common divisor of a and b.
 * @throws Will throw an error if a or b is NaN or if a or b is not an integer.
 *
 * @example
 * gcd(12, 15); // 3
 *
 */
export function gcd(a: number, b: number): number {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Both a and b must be numbers');
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Both a and b must be integers');
  }
  a = Math.abs(a);
  b = Math.abs(b);
  return b === 0 ? a : gcd(b, a % b);
}
