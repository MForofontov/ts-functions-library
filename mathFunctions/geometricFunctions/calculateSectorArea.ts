/**
 * Calculates the area of a sector given the radius and angle in degrees.
 * 
 * @param radius - The radius of the sector.
 * @param angle - The angle of the sector in degrees.
 * @returns The area of the sector.
 */
export function calculateSectorArea(radius: number, angle: number): number {
    return (angle / 360) * Math.PI * Math.pow(radius, 2);
}

// Example usage:
// sectorArea(5, 90); // ~19.63