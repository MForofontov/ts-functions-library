/**
 * Generates a random integer between two values (inclusive).
 * 
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between min and max.
 */
export function getRandomIntInRange(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
// getRandomIntInRange(1, 10); // Random integer between 1 and 10
