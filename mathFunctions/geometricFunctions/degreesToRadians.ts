/**
 * Converts degrees to radians.
 * 
 * @param degrees - The value in degrees.
 * @returns The value in radians.
 * @throws Will throw an error if degrees is NaN.
 */
export function degreesToRadians(degrees: number): number {
    if (isNaN(degrees)) {
        throw new Error('Degrees must be a number');
    }
    return degrees * (Math.PI / 180);
}

// Example usage:
// degreesToRadians(180); // 3.14159...