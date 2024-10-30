import { calculateFactorial } from './calculateFactorial';

/**
 * Calculates the permutation of n items taken k at a time (nPk).
 * 
 * @param n - The total number of items.
 * @param k - The number of items to arrange.
 * @returns The number of ways to arrange k items from n items.
 */
export function calculatePermutation(n: number, k: number): number {
    return calculateFactorial(n) / calculateFactorial(n - k);
}

// Example usage:
// permutation(5, 2); // 20