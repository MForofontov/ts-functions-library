/**
 * Calculates the volume of a cone given its radius and height.
 *
 * @param radius - The radius of the cone's base.
 * @param height - The height of the cone.
 * @returns The volume of the cone.
 * @throws Will throw an error if the radius or height is negative or NaN.
 */
export function calculateConeVolume(radius: number, height: number): number {
  if (isNaN(radius) || isNaN(height)) {
    throw new Error('Radius and height must be numbers');
  }
  if (radius < 0) {
    throw new Error('Radius must be a non-negative number');
  }
  if (height < 0) {
    throw new Error('Height must be a non-negative number');
  }
  return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
}

// Example usage:
// calculateConeVolume(5, 10); // ~261.80
