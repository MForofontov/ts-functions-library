import { degreesToRadians } from './degreesToRadians';

/**
 * Converts a number from degrees to its tangent value.
 * 
 * @param degrees - The angle in degrees.
 * @returns The tangent of the angle.
 */
export function calculateTangent(degrees: number): number {
    return Math.tan(degreesToRadians(degrees));
}

// Example usage:
// tangent(45); // 1