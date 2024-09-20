/**
 * Calculates the Fibonacci number at a specified position.
 * 
 * @param n - The position in the Fibonacci sequence (0-indexed).
 * @returns The Fibonacci number at the specified position.
 */
export function fibonacciIterative(n: number): number {
    if (n < 0) return -1; // Invalid input
    if (n <= 1) return n;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Example usage:
// fibonacci(5); // 5