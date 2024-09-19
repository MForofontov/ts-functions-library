/**
 * Gets unique elements in an array and their counts.
 * 
 * @param arr - The array to analyze.
 * @returns An object where keys are unique elements and values are their counts.
 */
export function uniqueElementsWithCounts<T>(arr: T[]): Record<string, number> {
    return arr.reduce((counts, item) => {
        counts[String(item)] = (counts[String(item)] || 0) + 1;
        return counts;
    }, {} as Record<string, number>);
}

// Example usage:
// const numbers = [1, 2, 2, 3, 3, 3];
// uniqueElementsWithCounts(numbers); // { "1": 1, "2": 2, "3": 3 }
