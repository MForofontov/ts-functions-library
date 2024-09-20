/**
 * Calculates the total surface area of a cone given its radius and slant height.
 * 
 * @param radius - The radius of the cone's base.
 * @param slantHeight - The slant height of the cone.
 * @returns The total surface area of the cone.
 */
export function calculateConeSurfaceArea(radius: number, slantHeight: number): number {
    const baseArea = Math.PI * Math.pow(radius, 2);
    const lateralArea = Math.PI * radius * slantHeight;
    return baseArea + lateralArea;
}

// Example usage:
// coneSurfaceArea(5, 10); // ~78.54