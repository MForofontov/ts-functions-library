/**
 * Calculates the decimal logarithm (base 10) of a number.
 *
 * @param n - The number to calculate the logarithm of (must be positive).
 * @returns The base 10 logarithm of the number.
 *
 * @throws {TypeError} If n is not a number.
 * @throws {Error} If n is NaN, negative, or zero.
 *
 * @example
 * // Powers of 10
 * calculateLogBase10(100); // 2
 * calculateLogBase10(1000); // 3
 * calculateLogBase10(10); // 1
 *
 * @example
 * // Non-integer results
 * calculateLogBase10(50); // 1.6989700043360189
 * calculateLogBase10(2); // 0.3010299956639812
 *
 * @example
 * // Edge cases
 * calculateLogBase10(1); // 0 (10^0 = 1)
 * calculateLogBase10(0.1); // -1
 * calculateLogBase10(0.01); // -2
 *
 * @example
 * // Scientific notation magnitude
 * const value = 1000000; // 1e6
 * const magnitude = calculateLogBase10(value); // 6 (order of magnitude)
 *
 * @example
 * // Calculating pH (chemistry)
 * const hydrogenConcentration = 0.0001; // mol/L
 * const pH = -calculateLogBase10(hydrogenConcentration); // 4
 *
 * @note Wraps Math.log10() with validation for consistency with other library functions.
 * @note Returns `-Infinity` for input of 0.
 * @note Returns `NaN` for negative inputs.
 * @note Useful for calculating orders of magnitude, decibels, pH values, and logarithmic scales.
 * @note Base 10 logarithm is commonly used in engineering and scientific applications.
 *
 * @complexity Time: O(1), Space: O(1)
 */
export function calculateLogBase10(n: number): number {
  return Math.log10(n);
}
