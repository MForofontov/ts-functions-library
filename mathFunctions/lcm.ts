import { gcd } from './gcd';

/**
 * Calculates the least common multiple (LCM) of two numbers.
 * 
 * @param a - The first number.
 * @param b - The second number.
 * @returns The least common multiple of a and b.
 */
export function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

// Example usage:
// lcm(12, 15); // 60