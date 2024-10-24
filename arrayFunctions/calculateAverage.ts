import { sumArrayElements } from './sumArrayElements';

// This function calculates the average of all numbers in an array
export function calculateAverage(arr: number[]): number {
    // Get the total sum of the array
    const total = sumArrayElements(arr);
    // If the array is not empty, return the average, otherwise return 0
    return arr.length ? total / arr.length : NaN;
}
