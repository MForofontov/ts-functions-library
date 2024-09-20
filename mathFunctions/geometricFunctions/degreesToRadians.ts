/**
 * Converts degrees to radians.
 * 
 * @param degrees - The value in degrees.
 * @returns The value in radians.
 */
export function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

// Example usage:
// degreesToRadians(180); // 3.14159...
