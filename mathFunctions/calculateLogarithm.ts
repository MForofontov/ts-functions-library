/**
 * Calculates the logarithm of a number to a specified base.
 * 
 * @param n - The number to find the logarithm of.
 * @param base - The base of the logarithm.
 * @returns The logarithm of the number to the specified base.
 */
export function calculateLogarithm(n: number, base: number = Math.E): number {
    return Math.log(n) / Math.log(base);
}

// Example usage:
// logarithm(100, 10); // 2 (log base 10 of 100)