/**
 * Checks if a number is odd.
 * 
 * @param n - The number to check.
 * @returns True if the number is odd, false if it is even or if the input is not an integer.
 * @throws Will throw an error if n is NaN.
 */
export function isOdd(n: number): boolean {
    if (isNaN(n)) {
        throw new Error('Input must be a number');
    }
    if (!Number.isInteger(n)) {
        return false;
    }
    return n % 2 !== 0;
}

// Example usage:
// isOdd(3); // true
// isOdd(4); // false