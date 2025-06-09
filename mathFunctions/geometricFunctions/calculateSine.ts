import { degreesToRadians } from './degreesToRadians';

/**
 * Converts a number from degrees to its sine value.
 *
 * @param degrees - The angle in degrees.
 * @returns The sine of the angle.
 * @throws Will throw an error if degrees is NaN.
 */
export function calculateSine(degrees: number): number {
  if (isNaN(degrees)) {
    throw new Error('Degrees must be a number');
  }
  return Math.sin(degreesToRadians(degrees));
}

// Example usage:
// sine(30); // 0.5
