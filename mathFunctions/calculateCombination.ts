import { calculateFactorial } from './calculateFactorial';

/**
 * Calculates the combination of n items taken k at a time (n choose k).
 * 
 * @param n - The total number of items.
 * @param k - The number of items to choose.
 * @returns The number of ways to choose k items from n items.
 */
export function combination(n: number, k: number): number {
    if (k > n) return 0;
    return calculateFactorial(n) / (calculateFactorial(k) * calculateFactorial(n - k));
}

// Example usage:
// combination(5, 2); // 10