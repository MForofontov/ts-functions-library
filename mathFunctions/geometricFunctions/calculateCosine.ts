import { degreesToRadians } from './degreesToRadians';

/**
 * Converts a number from degrees to its cosine value.
 * 
 * @param degrees - The angle in degrees.
 * @returns The cosine of the angle.
 */
export function calculateCosine(degrees: number): number {
    return Math.cos(degreesToRadians(degrees));
}

// Example usage:
// cosine(60); // 0.5