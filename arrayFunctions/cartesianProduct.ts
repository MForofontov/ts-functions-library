/**
 * Calculates the Cartesian product of two or more arrays.
 * 
 * @param arrays - The arrays to compute the Cartesian product of.
 * @returns An array containing all possible combinations of elements from the input arrays.
 */
export function cartesianProduct(...arrays: any[][]): any[][] {
    return arrays.reduce<any[][]>((acc, arr) =>
        acc.flatMap(x => arr.map(y => [...x, y])), [[]] as any[][]
    );
}

// Example usage:
// const colors = ['red', 'green'];
// const sizes = ['S', 'M'];
// const quantities = [1, 2];
// cartesianProduct(colors, sizes, quantities); 
// [['red', 'S', 1], ['red', 'S', 2], ['red', 'M', 1], ['red', 'M', 2], ['green', 'S', 1], ['green', 'S', 2], ['green', 'M', 1], ['green', 'M', 2]]