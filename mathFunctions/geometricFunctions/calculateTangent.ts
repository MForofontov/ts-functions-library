import { degreesToRadians } from './degreesToRadians';

/**
 * Converts a number from degrees to its tangent value.
 * 
 * @param degrees - The angle in degrees.
 * @returns The tangent of the angle.
 * @throws Will throw an error if degrees is NaN.
 */
export function calculateTangent(degrees: number): number {
    if (isNaN(degrees)) {
        throw new Error('Degrees must be a number');
    }
    return Math.tan(degreesToRadians(degrees));
}

// Example usage:
// calculateTangent(45); // 1