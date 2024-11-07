/**
 * Calculates the hypotenuse of a right triangle given the lengths of the other two sides.
 * 
 * @param a - The length of one side.
 * @param b - The length of the other side.
 * @returns The length of the hypotenuse.
 * @throws Will throw an error if the side lengths are negative or NaN.
 */
export function calculateHypotenuse(a: number, b: number): number {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Side lengths must be numbers');
    }
    if (a < 0 || b < 0) {
        throw new Error('Side lengths must be non-negative numbers');
    }
    return Math.sqrt(a * a + b * b);
}

// Example usage:
// calculateHypotenuse(3, 4); // 5