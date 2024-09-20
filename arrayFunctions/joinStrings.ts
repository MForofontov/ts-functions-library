/**
 * Joins an array of strings into a single string with a specified separator.
 * 
 * @param arr - The array of strings to join.
 * @param separator - The separator to use.
 * @returns The joined string.
 */
export function joinStrings(arr: string[], separator: string): string {
    return arr.join(separator);
}

// Example usage:
// joinStrings(["hello", "world"], " "); // "hello world"