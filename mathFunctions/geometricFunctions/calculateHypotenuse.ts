/**
 * Calculates the hypotenuse of a right triangle given the lengths of the other two sides.
 * 
 * @param a - The length of one side.
 * @param b - The length of the other side.
 * @returns The length of the hypotenuse.
 */
export function calculateHypotenuse(a: number, b: number): number {
    return Math.sqrt(a * a + b * b);
}

// Example usage:
// hypotenuse(3, 4); // 5