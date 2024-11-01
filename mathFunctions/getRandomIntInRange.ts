/**
 * Generates a random integer between two values (inclusive).
 * 
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between min and max.
 * @throws Will throw an error if min is greater than max, if min or max is NaN, or if min or max is not an integer.
 */
export function getRandomIntInRange(min: number, max: number): number {
    if (isNaN(min) || isNaN(max)) {
        throw new Error('Both min and max must be numbers');
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error('Both min and max must be integers');
    }
    if (min > max) {
        throw new Error('min must be less than or equal to max');
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
// getRandomIntInRange(1, 10); // Random integer between 1 and 10