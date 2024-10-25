/**
 * Zips multiple arrays together.
 * 
 * @param arrays - The arrays to zip.
 * @returns A new array where each element is an array containing the elements from the input arrays at the same index.
 */
export function zipMultiple(...arrays: any[][]): any[][] {
    const minLength = Math.min(...arrays.map(arr => arr.length));
    const result: any[][] = [];
    for (let i = 0; i < minLength; i++) {
        result.push(arrays.map(arr => arr[i]));
    }
    return result;
}

// Example usage:
// const names = ['Alice', 'Bob', 'Charlie'];
// const ages = [25, 30, 35];
// const cities = ['New York', 'Los Angeles', 'Chicago'];
// zipMultiple(names, ages, cities); // [['Alice', 25, 'New York'], ['Bob', 30, 'Los Angeles'], ['Charlie', 35, 'Chicago']]