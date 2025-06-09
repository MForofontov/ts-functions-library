/**
 * Flattens a multi-dimensional array into a one-dimensional array.
 *
 * @param arr - The nested array to flatten.
 * @returns A new flattened array.
 */
export function flattenArray<T>(arr: any[]): T[] {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
    [],
  );
}

// Example usage:
// const nestedArray = [1, [2, [3, 4], 5], 6];
// flattenArray(nestedArray); // [1, 2, 3, 4, 5, 6]
