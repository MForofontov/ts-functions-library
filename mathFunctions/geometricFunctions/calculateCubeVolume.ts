/**
 * Calculates the volume of a cube given the length of its side.
 * 
 * @param side - The length of a side of the cube.
 * @returns The volume of the cube.
 * @throws Will throw an error if the side length is negative or NaN.
 */
export function calculateCubeVolume(side: number): number {
    if (isNaN(side)) {
        throw new Error('Side length must be a number');
    }
    if (side < 0) {
        throw new Error('Side length must be a non-negative number');
    }
    return Math.pow(side, 3);
}

// Example usage:
// calculateCubeVolume(3); // 27