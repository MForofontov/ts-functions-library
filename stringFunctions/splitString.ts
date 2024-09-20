/**
 * Splits a string into an array of substrings based on a specified delimiter.
 * 
 * @param str - The string to split.
 * @param delimiter - The delimiter to use for splitting.
 * @returns An array of substrings.
 */
export function splitString(str: string, delimiter: string): string[] {
    return str.split(delimiter);
}

// Example usage:
// splitString("hello,world", ","); // ["hello", "world"]