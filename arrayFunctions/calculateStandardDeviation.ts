import { calculateAverage } from './calculateAverage';

/**
 * Calculates the standard deviation of an array of numbers.
 * 
 * @param arr - The array of numbers.
 * @returns The standard deviation of the numbers in the array.
 */
export function calculateStandardDeviation(arr: number[]): number {
    const mean = calculateAverage(arr);
    const variance = arr.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / arr.length;
    return Math.sqrt(variance);
}

// Example usage:
// const values = [1, 2, 3, 4, 5];
// calculateStandardDeviation(values); // ~1.414