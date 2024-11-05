/**
 * Calculates the area of a circle given its radius.
 * 
 * @param radius - The radius of the circle.
 * @returns The area of the circle.
 */
export function calculateCircleArea(radius: number): number {
    if (isNaN(radius)) {
        throw new Error('Radius must be a number');
    }
    if (radius < 0) {
        throw new Error('Radius must be a non-negative number');
    }
    return Math.PI * Math.pow(radius, 2);
}

// Example usage:
// circleArea(5); // ~78.54