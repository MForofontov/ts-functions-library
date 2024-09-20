/**
 * Converts radians to degrees.
 * 
 * @param radians - The value in radians.
 * @returns The value in degrees.
 */
export function radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
}

// Example usage:
// radiansToDegrees(Math.PI); // 180
