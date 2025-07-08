/**
 * Calculates the logarithm of a number with a specified base.
 *
 * @param n - The number to find the logarithm of.
 * @param base - The base of the logarithm (default is e for natural logarithm).
 * @returns The logarithm of the number with the specified base.
 * @throws Will throw an error if n or base is NaN, if n is negative, if base is less than or equal to 0, or if base is 1.
 *
 * @example
 * calculateLogarithm(100, 10); // 2
 *
 */
export function calculateLogarithm(n: number, base: number = Math.E): number {
  if (isNaN(n) || isNaN(base)) {
    throw new Error('Both n and base must be numbers');
  }
  if (n <= 0) {
    throw new Error('Input must be a positive number');
  }
  if (base <= 0 || base === 1) {
    throw new Error('Base must be greater than 0 and not equal to 1');
  }
  return Math.log(n) / Math.log(base);
}

