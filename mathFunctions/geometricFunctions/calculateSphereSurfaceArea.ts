/**
 * Calculates the surface area of a sphere given its radius.
 * 
 * @param radius - The radius of the sphere.
 * @returns The surface area of the sphere.
 */
export function calculateSphereSurfaceArea(radius: number): number {
    return 4 * Math.PI * Math.pow(radius, 2);
}

// Example usage:
// sphereSurfaceArea(5); // ~314.16