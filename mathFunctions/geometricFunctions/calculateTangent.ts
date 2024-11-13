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

    // Normalize the angle to the range [0, 360)
    degrees = degrees % 360;
    if (degrees < 0) {
        degrees += 360;
    }

    // Handle angles where tangent approaches Infinity or -Infinity
    if (degrees === 90 || degrees === 270) {
        return degrees === 90 ? Infinity : -Infinity;
    }

    return Math.tan(degreesToRadians(degrees));
}

// Example usage:
// calculateTangent(45); // 1
// calculateTangent(90); // Infinity
// calculateTangent(270); // -Infinity