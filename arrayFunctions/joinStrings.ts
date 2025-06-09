/**
 * Joins an array of elements into a single string with a specified separator.
 *
 * @param arr - The array of elements to join.
 * @param separator - The separator to use between elements.
 * @returns The joined string.
 */
export function joinStrings(arr: any[], separator: string): string {
  return arr
    .map((item) => (typeof item === 'function' ? item() : String(item)))
    .join(separator);
}

// Example usage:
// joinStrings(["hello", "world"], " "); // "hello world"
