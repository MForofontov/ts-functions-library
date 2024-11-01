/**
 * Rounds a number up to the nearest integer.
 * 
 * @param n - The number to round up.
 * @returns The number rounded up to the nearest integer.
 * @throws Will throw an error if n is NaN.
 */
export function ceilValue(n: number): number {
    if (isNaN(n)) {
        throw new Error('Input must be a number');
    }
    return Math.ceil(n);
}

// Example usage:
// ceilValue(4.2); // 5