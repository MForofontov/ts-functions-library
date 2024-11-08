/**
 * Calculates the perimeter of a rectangle given its width and height.
 * 
 * @param width - The width of the rectangle.
 * @param height - The height of the rectangle.
 * @returns The perimeter of the rectangle.
 * @throws Will throw an error if the width or height is negative or NaN.
 */
export function calculateRectanglePerimeter(width: number, height: number): number {
    if (isNaN(width) || isNaN(height)) {
        throw new Error('Width and height must be numbers');
    }
    if (width < 0 || height < 0) {
        throw new Error('Width and height must be non-negative numbers');
    }
    return 2 * (width + height);
}

// Example usage:
// calculateRectanglePerimeter(10, 5); // 30