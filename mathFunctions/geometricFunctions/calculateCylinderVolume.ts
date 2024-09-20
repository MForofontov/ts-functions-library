/**
 * Calculates the volume of a cylinder given its radius and height.
 * 
 * @param radius - The radius of the cylinder.
 * @param height - The height of the cylinder.
 * @returns The volume of the cylinder.
 */
export function calculateCylinderVolume(radius: number, height: number): number {
    return Math.PI * Math.pow(radius, 2) * height;
}

// Example usage:
// cylinderVolume(5, 10); // ~785.4