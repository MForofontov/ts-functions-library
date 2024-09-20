/**
 * Calculates the area of a trapezoid given the lengths of its two bases and its height.
 * 
 * @param base1 - The length of the first base.
 * @param base2 - The length of the second base.
 * @param height - The height of the trapezoid.
 * @returns The area of the trapezoid.
 */
export function calculateTrapezoidArea(base1: number, base2: number, height: number): number {
    return 0.5 * (base1 + base2) * height;
}

// Example usage:
// trapezoidArea(5, 7, 3); // 18