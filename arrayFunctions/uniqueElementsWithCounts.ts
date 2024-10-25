/**
 * Gets unique elements in an array and their counts.
 * 
 * @param arr - The array to analyze.
 * @returns An array of objects where each object contains a unique element and its count.
 */
export function uniqueElementsWithCounts<T>(arr: T[]): { element: T; count: number }[] {
    const counts: Map<T, number> = new Map();
    arr.forEach((item) => {
        counts.set(item, (counts.get(item) || 0) + 1);
    });
    return Array.from(counts, ([element, count]) => ({ element, count }));
}

// Example usage:
// const numbers = [1, 2, 2, 3, 3, 3];
// uniqueElementsWithCounts(numbers); // [{ element: 1, count: 1 }, { element: 2, count: 2 }, { element: 3, count: 3 }]