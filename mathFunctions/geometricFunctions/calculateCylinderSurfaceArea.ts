/**
 * Calculates the surface area of a cylinder given its radius and height.
 * 
 * @param radius - The radius of the cylinder.
 * @param height - The height of the cylinder.
 * @returns The surface area of the cylinder.
 */
export function calculateCylinderSurfaceArea(radius: number, height: number): number {
    return 2 * Math.PI * radius * (radius + height);
}

// Example usage:
// cylinderSurfaceArea(5, 10); // ~471.24