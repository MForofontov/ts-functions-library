import { calculateFactorial } from './calculateFactorial';

/**
 * Calculates the binomial coefficient (n choose k).
 *
 * @param n - The total number of items.
 * @param k - The number of items to choose.
 * @returns The binomial coefficient.
 * @throws Will throw an error if n or k is not an integer, if n or k is NaN, or if n or k is negative.
 *
 * @example
 * calculateBinomialCoefficient(5, 2); // 10
 *
 */
export function calculateBinomialCoefficient(n: number, k: number): number {
  if (isNaN(n) || isNaN(k)) {
    throw new Error('Both n and k must be numbers');
  }
  if (!Number.isInteger(n) || !Number.isInteger(k)) {
    throw new Error('Both n and k must be integers');
  }
  if (n < 0 || k < 0) {
    throw new Error('Both n and k must be non-negative integers');
  }
  if (k > n) {
    return 0;
  }
  return (
    calculateFactorial(n) / (calculateFactorial(k) * calculateFactorial(n - k))
  );
}

