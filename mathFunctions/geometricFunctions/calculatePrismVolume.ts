/**
 * Calculates the volume of a rectangular prism given its width, height, and depth.
 *
 * @param width - The width of the prism.
 * @param height - The height of the prism.
 * @param depth - The depth of the prism.
 * @returns The volume of the rectangular prism.
 * @throws Will throw an error if the width, height, or depth is negative or NaN.
 */
export function calculatePrismVolume(
  width: number,
  height: number,
  depth: number,
): number {
  if (isNaN(width) || isNaN(height) || isNaN(depth)) {
    throw new Error('Width, height, and depth must be numbers');
  }
  if (width < 0 || height < 0 || depth < 0) {
    throw new Error('Width, height, and depth must be non-negative numbers');
  }
  return width * height * depth;
}

// Example usage:
// calculatePrismVolume(2, 3, 4); // 24
