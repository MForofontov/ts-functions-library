/**
 * Calculates the volume of a cube given the length of its side.
 * 
 * @param side - The length of a side of the cube.
 * @returns The volume of the cube.
 */
export function calculateCubeVolume(side: number): number {
    return Math.pow(side, 3);
}

// Example usage:
// cubeVolume(3); // 27