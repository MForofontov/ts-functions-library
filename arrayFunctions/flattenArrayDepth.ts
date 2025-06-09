/**
 * Flattens an array of arrays up to a specified depth.
 *
 * @param arr - The nested array to flatten.
 * @param depth - The depth level to flatten. Default is 1.
 * @returns A new array flattened to the specified depth.
 */
export function flattenArrayDepth<T>(arr: any[], depth: number = 1): T[] {
  return depth > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(
            Array.isArray(val) ? flattenArrayDepth(val, depth - 1) : val,
          ),
        [],
      )
    : arr.slice();
}

// Example usage:
// const nestedArray = [1, [2, [3, 4], 5], 6];
// flattenArrayDepth(nestedArray, 2); // [1, 2, 3, 4, 5, 6]
