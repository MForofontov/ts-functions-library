/**
 * Calculates the circumference of a circle given its radius.
 *
 * @param radius - The radius of the circle.
 * @returns The circumference of the circle.
 * @throws Will throw an error if the radius is negative or NaN.
 */
export function calculateCircleCircumference(radius: number): number {
  if (isNaN(radius)) {
    throw new Error('Radius must be a number');
  }
  if (radius < 0) {
    throw new Error('Radius must be a non-negative number');
  }
  return 2 * Math.PI * radius;
}

// Example usage:
// calculateCircleCircumference(5); // ~31.42
