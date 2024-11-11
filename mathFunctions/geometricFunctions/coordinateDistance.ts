/**
 * Calculates the distance between two points (x1, y1) and (x2, y2).
 * 
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @returns The distance between the two points.
 * @throws Will throw an error if any of the coordinates are NaN.
 */
export function coordinateDistance(x1: number, y1: number, x2: number, y2: number): number {
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        throw new Error('All coordinates must be numbers');
    }
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

// Example usage:
// coordinateDistance(0, 0, 3, 4); // 5