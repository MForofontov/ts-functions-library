import { calculateFactorial } from './calculateFactorial';

/**
 * Calculates the binomial coefficient (n choose k).
 * 
 * @param n - The total number of items.
 * @param k - The number of items to choose.
 * @returns The binomial coefficient.
 */
export function calculateBinomialCoefficient(n: number, k: number): number {
    return calculateFactorial(n) / (calculateFactorial(k) * calculateFactorial(n - k));
}

// Example usage:
// binomialCoefficient(5, 2); // 10