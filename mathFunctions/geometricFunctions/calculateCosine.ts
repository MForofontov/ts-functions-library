import { degreesToRadians } from './degreesToRadians';

/**
 * Converts a number from degrees to its cosine value.
 *
 * @param degrees - The angle in degrees.
 * @returns The cosine of the angle.
 * @throws Will throw an error if degrees is NaN.
 */
export function calculateCosine(degrees: number): number {
  if (isNaN(degrees)) {
    throw new Error('Degrees must be a number');
  }

  // Normalize the angle to the range [0, 360)
  degrees = degrees % 360;
  if (degrees < 0) {
    degrees += 360;
  }

  return Math.cos(degreesToRadians(degrees));
}

// Example usage:
// calculateCosine(60); // 0.5
