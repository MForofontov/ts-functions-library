/**
 * Calculates the mode of an array of numbers.
 * 
 * @param arr - The array of numbers.
 * @returns An array containing the mode(s) of the numbers in the array.
 */
export function calculateMode(arr: number[]): number[] {
    const frequency: { [key: string]: number } = {};
    arr.forEach((num: number) => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    const maxFreq: number = Math.max(...Object.values(frequency));
    return Object.keys(frequency)
        .filter((num: string) => frequency[num] === maxFreq)
        .map(Number)
        .sort((a: number, b: number) => a - b); // Ensure the result is sorted
}

// Example usage:
// const value = [1, 2, 3, 4, 5, 1, 2, 3, 1, 2];
// calculateMode(value); // [1, 2]