import { degreesToRadians } from './degreesToRadians';

/**
 * Converts a number from degrees to its sine value.
 * 
 * @param degrees - The angle in degrees.
 * @returns The sine of the angle.
 */
export function sine(degrees: number): number {
    return Math.sin(degreesToRadians(degrees));
}

// Example usage:
// sine(30); // 0.5