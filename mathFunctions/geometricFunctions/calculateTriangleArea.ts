/**
 * Calculates the area of a triangle given its base and height.
 *
 * @param base - The base of the triangle.
 * @param height - The height of the triangle.
 * @returns The area of the triangle.
 * @throws Will throw an error if the base or height is negative or NaN.
 */
export function calculateTriangleArea(base: number, height: number): number {
  if (isNaN(base) || isNaN(height)) {
    throw new Error('Base and height must be numbers');
  }
  if (base < 0 || height < 0) {
    throw new Error('Base and height must be non-negative numbers');
  }
  return 0.5 * base * height;
}

// Example usage:
// calculateTriangleArea(10, 5); // 25
