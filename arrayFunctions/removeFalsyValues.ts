/**
 * Removes falsy values from an array (e.g., false, 0, "", null, undefined, NaN).
 * 
 * @param arr - The array with possible falsy values.
 * @returns A new array without any falsy values.
 */
export function removeFalsyValues<T>(arr: any[]): any[] {
    return arr.filter((value): value is T => Boolean(value));
}

// Example usage:
// const mixedArray = [0, 1, false, 2, "", 3, null, 4, undefined];
// removeFalsyValues(mixedArray); // [1, 2, 3, 4]
