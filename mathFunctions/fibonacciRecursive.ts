/**
 * Finds the nth Fibonacci number using recursion.
 * 
 * @param n - The position in the Fibonacci sequence.
 * @returns The nth Fibonacci number.
 */
export function fibonacciRecursive(n: number): number {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Example usage:
// fibonacci(6); // 8