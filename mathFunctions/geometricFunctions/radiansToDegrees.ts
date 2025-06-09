/**
 * Converts radians to degrees.
 *
 * @param radians - The value in radians.
 * @returns The value in degrees.
 * @throws Will throw an error if radians is NaN.
 */
export function radiansToDegrees(radians: number): number {
  if (isNaN(radians)) {
    throw new Error('Radians must be a number');
  }
  return radians * (180 / Math.PI);
}

// Example usage:
// radiansToDegrees(Math.PI); // 180
