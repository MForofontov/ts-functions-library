/**
 * Combines multiple arrays into an array of tuples.
 * 
 * @param arrays - The arrays to combine.
 * @returns An array of tuples, where each tuple contains one element from each input array.
 */
export function zipMultiple<T>(...arrays: T[][]): any[][] {
    const length = Math.min(...arrays.map(arr => arr.length));
    return Array.from({ length }, (_, i) => arrays.map(arr => arr[i]));
}

// Example usage:
// const names = ['Alice', 'Bob', 'Charlie'];
// const ages = [25, 30, 35];
// const cities = ['New York', 'Los Angeles', 'Chicago'];
// zipMultiple(names, ages, cities); 
// Output: [['Alice', 25, 'New York'], ['Bob', 30, 'Los Angeles'], ['Charlie', 35, 'Chicago']]
