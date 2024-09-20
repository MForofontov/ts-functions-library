/**
 * Calculates the factorial of a number (n!).
 * 
 * @param n - The number to calculate the factorial for.
 * @returns The factorial of the number.
 */
export function calculateFactorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}

// Example usage:
// factorial(5); // 120