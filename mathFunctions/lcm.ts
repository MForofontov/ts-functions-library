import { gcd } from './gcd';

/**
 * Calculates the least common multiple (LCM) of two numbers.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The least common multiple of a and b.
 * @throws Will throw an error if both a and b are zero, if a or b is NaN, or if a or b is not an integer.
 *
 * @example
 * lcm(12, 15); // 60
 *
 */
export function lcm(a: number, b: number): number {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Both a and b must be numbers');
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Both a and b must be integers');
  }
  if (a === 0 && b === 0) {
    throw new Error('LCM is not defined for both a and b being zero');
  }
  return Math.abs((a * b) / gcd(a, b));
}
