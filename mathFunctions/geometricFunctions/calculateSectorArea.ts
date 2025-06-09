/**
 * Calculates the area of a sector given the radius and angle in degrees.
 *
 * @param radius - The radius of the sector.
 * @param angle - The angle of the sector in degrees.
 * @returns The area of the sector.
 * @throws Will throw an error if the radius or angle is negative or NaN.
 */
export function calculateSectorArea(radius: number, angle: number): number {
  if (isNaN(radius) || isNaN(angle)) {
    throw new Error('Radius and angle must be numbers');
  }
  if (radius < 0 || angle < 0) {
    throw new Error('Radius and angle must be non-negative numbers');
  }
  return (angle / 360) * Math.PI * Math.pow(radius, 2);
}

// Example usage:
// calculateSectorArea(5, 90); // ~19.63
