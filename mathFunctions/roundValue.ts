/**
 * Rounds a number to the nearest integer.
 * 
 * @param n - The number to round.
 * @returns The number rounded to the nearest integer.
 * @throws Will throw an error if n is NaN.
 */
export function roundValue(n: number): number {
    if (isNaN(n)) {
        throw new Error('Input must be a number');
    }
    return Math.round(n);
}

// Example usage:
// roundValue(4.5); // 5