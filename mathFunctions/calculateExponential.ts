/**
 * Calculates the exponential of a number (`e^n`).
 *
 * @param n - The exponent.
 * @returns The result of `e` raised to the power of `n`.
 *
 * @example
 * // Basic usage
 * calculateExponential(1); // 2.718...
 *
 * @note Wraps `Math.exp` for convenience.
 *
 * @complexity O(1)
 */
export function calculateExponential(n: number): number {
  return Math.exp(n);
}

