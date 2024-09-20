/**
 * Calculates the nth triangular number.
 * 
 * @param n - The position of the triangular number.
 * @returns The nth triangular number.
 */
export function calculateTriangularNumber(n: number): number {
    return (n * (n + 1)) / 2;
}

// Example usage:
// triangularNumber(5); // 15