/**
 * Calculates the area of a circle given its radius.
 * 
 * @param radius - The radius of the circle.
 * @returns The area of the circle.
 */
export function calculateCircleArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
}

// Example usage:
// circleArea(5); // ~78.54