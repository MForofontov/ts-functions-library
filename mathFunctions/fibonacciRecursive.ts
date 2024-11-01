/**
 * Calculates the nth Fibonacci number using a recursive approach.
 * 
 * @param n - The position in the Fibonacci sequence.
 * @returns The nth Fibonacci number.
 * @throws Will throw an error if n is not an integer, if n is NaN, or if n is negative.
 */
export function fibonacciRecursive(n: number): number {
    if (isNaN(n)) {
        throw new Error('Input must be a number');
    }
    if (!Number.isInteger(n)) {
        throw new Error('Input must be an integer');
    }
    if (n < 0) {
        return Math.pow(-1, n + 1) * fibonacciRecursive(-n);
    }
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Example usage:
// fibonacciRecursive(6); // 8