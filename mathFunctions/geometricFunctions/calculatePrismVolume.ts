/**
 * Calculates the volume of a rectangular prism given its width, height, and depth.
 * 
 * @param width - The width of the prism.
 * @param height - The height of the prism.
 * @param depth - The depth of the prism.
 * @returns The volume of the rectangular prism.
 */
export function calculatePrismVolume(width: number, height: number, depth: number): number {
    return width * height * depth;
}

// Example usage:
// prismVolume(2, 3, 4); // 24