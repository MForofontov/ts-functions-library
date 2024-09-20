/**
 * Calculates the median value of an array of numbers.
 * 
 * @param arr - The array of numbers to find the median of.
 * @returns The median value.
 */
export function calculateMedian(arr: number[]): number {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

// Example usage:
// const numbers = [3, 1, 4, 1, 5, 9, 2];
// findMedian(numbers); // 3
