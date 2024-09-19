/**
 * Sorts an array of objects based on a given property.
 * 
 * @param arr - The array of objects to sort.
 * @param key - The property to sort by.
 * @returns The sorted array.
 */
export function sortBy<T>(arr: T[], key: keyof T): T[] {
    return [...arr].sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
}

// Example usage:
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie', age: 30 }
// ];
// sortBy(people, 'age'); 
// Output: [{ name: 'Bob', age: 22 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]
