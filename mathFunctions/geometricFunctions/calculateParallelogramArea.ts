/**
 * Calculates the area of a parallelogram given its base and height.
 *
 * @param base - The base of the parallelogram.
 * @param height - The height of the parallelogram.
 * @returns The area of the parallelogram.
 * @throws Will throw an error if the base or height is negative or NaN.
 */
export function calculateParallelogramArea(
  base: number,
  height: number,
): number {
  if (isNaN(base) || isNaN(height)) {
    throw new Error('Base and height must be numbers');
  }
  if (base < 0 || height < 0) {
    throw new Error('Base and height must be non-negative numbers');
  }
  return base * height;
}

// Example usage:
// calculateParallelogramArea(10, 5); // 50
