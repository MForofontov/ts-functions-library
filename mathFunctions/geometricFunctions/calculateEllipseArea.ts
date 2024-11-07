/**
 * Calculates the area of an ellipse given its semi-major and semi-minor axes.
 * 
 * @param semiMajor - The length of the semi-major axis.
 * @param semiMinor - The length of the semi-minor axis.
 * @returns The area of the ellipse.
 * @throws Will throw an error if the semi-major or semi-minor axis is negative or NaN.
 */
export function calculateEllipseArea(semiMajor: number, semiMinor: number): number {
    if (isNaN(semiMajor) || isNaN(semiMinor)) {
        throw new Error('Semi-major and semi-minor axes must be numbers');
    }
    if (semiMajor < 0) {
        throw new Error('Semi-major axis must be a non-negative number');
    }
    if (semiMinor < 0) {
        throw new Error('Semi-minor axis must be a non-negative number');
    }
    return Math.PI * semiMajor * semiMinor;
}

// Example usage:
// calculateEllipseArea(5, 3); // ~47.12