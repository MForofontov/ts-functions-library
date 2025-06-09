/**
 * Calculates the volume of a sphere given its radius.
 *
 * @param radius - The radius of the sphere.
 * @returns The volume of the sphere.
 * @throws Will throw an error if the radius is negative or NaN.
 */
export function calculateSphereVolume(radius: number): number {
  if (isNaN(radius)) {
    throw new Error('Radius must be a number');
  }
  if (radius < 0) {
    throw new Error('Radius must be a non-negative number');
  }
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

// Example usage:
// calculateSphereVolume(5); // ~523.6
