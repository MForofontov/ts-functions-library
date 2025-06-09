/**
 * Calculates the surface area of a sphere given its radius.
 *
 * @param radius - The radius of the sphere.
 * @returns The surface area of the sphere.
 * @throws Will throw an error if the radius is negative or NaN.
 */
export function calculateSphereSurfaceArea(radius: number): number {
  if (isNaN(radius)) {
    throw new Error('Radius must be a number');
  }
  if (radius < 0) {
    throw new Error('Radius must be a non-negative number');
  }
  return 4 * Math.PI * Math.pow(radius, 2);
}

// Example usage:
// calculateSphereSurfaceArea(5); // ~314.16
