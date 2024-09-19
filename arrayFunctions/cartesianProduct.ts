/**
 * Calculates the Cartesian product of two or more arrays.
 * 
 * @param arrays - The arrays to compute the Cartesian product of.
 * @returns An array containing all possible combinations of elements from the input arrays.
 */
export function cartesianProduct<T>(...arrays: T[][]): T[][] {
    return arrays.reduce<T[][]>((acc, arr) =>
        acc.flatMap(x => arr.map(y => [...x, y])), [[]] as T[][]
    );
}
// Example usage:
// const colors = ['red', 'green'];
// const sizes = ['S', 'M'];
// cartesianProduct(colors, sizes); // [['red', 'S'], ['red', 'M'], ['green', 'S'], ['green', 'M']]
