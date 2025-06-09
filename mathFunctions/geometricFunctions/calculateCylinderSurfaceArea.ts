/**
 * Calculates the surface area of a cylinder given its radius and height.
 *
 * @param radius - The radius of the cylinder.
 * @param height - The height of the cylinder.
 * @returns The surface area of the cylinder.
 * @throws Will throw an error if the radius or height is negative or NaN.
 */
export function calculateCylinderSurfaceArea(
  radius: number,
  height: number,
): number {
  if (isNaN(radius) || isNaN(height)) {
    throw new Error('Radius and height must be numbers');
  }
  if (radius < 0) {
    throw new Error('Radius must be a non-negative number');
  }
  if (height < 0) {
    throw new Error('Height must be a non-negative number');
  }
  return 2 * Math.PI * radius * (radius + height);
}

// Example usage:
// calculateCylinderSurfaceArea(5, 10); // ~471.24
