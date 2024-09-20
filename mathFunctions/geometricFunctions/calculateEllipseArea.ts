/**
 * Calculates the area of an ellipse given its semi-major and semi-minor axes.
 * 
 * @param semiMajor - The length of the semi-major axis.
 * @param semiMinor - The length of the semi-minor axis.
 * @returns The area of the ellipse.
 */
export function calculateEllipseArea(semiMajor: number, semiMinor: number): number {
    return Math.PI * semiMajor * semiMinor;
}

// Example usage:
// ellipseArea(5, 3); // ~47.12