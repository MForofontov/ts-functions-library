/**
 * Calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 * 
 * @param a - The first number.
 * @param b - The second number.
 * @returns The greatest common divisor of a and b.
 */
export function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

// Example usage:
// gcd(12, 15); // 3