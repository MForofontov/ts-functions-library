/**
 * Calculates the volume of a cone given its radius and height.
 * 
 * @param radius - The radius of the cone's base.
 * @param height - The height of the cone.
 * @returns The volume of the cone.
 */
export function calculateConeVolume(radius: number, height: number): number {
    return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
}

// Example usage:
// coneVolume(5, 10); // ~83.33