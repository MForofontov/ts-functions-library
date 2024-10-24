/**
 * Checks if a number is odd.
 * 
 * @param n - The number to check.
 * @returns True if the number is odd, false if it is even.
 */
export function isOdd(n: number): boolean {
    return n % 2 !== 0;
}

// Example usage:
// isOdd(3); // true
// isOdd(4); // false