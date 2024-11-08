/**
 * Calculates the area of a trapezoid given the lengths of its two bases and its height.
 * 
 * @param base1 - The length of the first base.
 * @param base2 - The length of the second base.
 * @param height - The height of the trapezoid.
 * @returns The area of the trapezoid.
 * @throws Will throw an error if the base1, base2, or height is negative or NaN.
 */
export function calculateTrapezoidArea(base1: number, base2: number, height: number): number {
    if (isNaN(base1) || isNaN(base2) || isNaN(height)) {
        throw new Error('Base1, base2, and height must be numbers');
    }
    if (base1 < 0 || base2 < 0 || height < 0) {
        throw new Error('Base1, base2, and height must be non-negative numbers');
    }
    return 0.5 * (base1 + base2) * height;
}

// Example usage:
// calculateTrapezoidArea(5, 7, 3); // 18