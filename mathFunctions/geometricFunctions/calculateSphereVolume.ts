/**
 * Calculates the volume of a sphere given its radius.
 * 
 * @param radius - The radius of the sphere.
 * @returns The volume of the sphere.
 */
export function calculateSphereVolume(radius: number): number {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

// Example usage:
// sphereVolume(5); // ~523.6