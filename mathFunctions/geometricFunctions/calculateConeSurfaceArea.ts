/**
 * Calculates the total surface area of a cone given its radius and slant height.
 * 
 * @param radius - The radius of the cone's base.
 * @param slantHeight - The slant height of the cone.
 * @returns The total surface area of the cone.
 * @throws Will throw an error if the radius or slant height is negative or NaN.
 */
export function calculateConeSurfaceArea(radius: number, slantHeight: number): number {
    if (isNaN(radius) || isNaN(slantHeight)) {
        throw new Error('Radius and slant height must be numbers');
    }
    if (radius < 0) {
        throw new Error('Radius must be a non-negative number');
    }
    if (slantHeight < 0) {
        throw new Error('Slant height must be a non-negative number');
    }
    const baseArea = Math.PI * Math.pow(radius, 2);
    const lateralArea = Math.PI * radius * slantHeight;
    return baseArea + lateralArea;
}

// Example usage:
// calculateConeSurfaceArea(5, 10); // ~235.62