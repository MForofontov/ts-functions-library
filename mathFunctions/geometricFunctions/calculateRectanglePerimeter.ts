/**
 * Calculates the perimeter of a rectangle given its width and height.
 * 
 * @param width - The width of the rectangle.
 * @param height - The height of the rectangle.
 * @returns The perimeter of the rectangle.
 */
export function calculateRectanglePerimeter(width: number, height: number): number {
    return 2 * (width + height);
}

// Example usage:
// rectanglePerimeter(10, 5); // 30