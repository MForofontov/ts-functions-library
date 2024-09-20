/**
 * Converts a string to an array of words.
 * 
 * @param str - The string to split into words.
 * @returns An array of words.
 */
export function stringToWords(str: string): string[] {
    return str.trim().split(/\s+/);
}

// Example usage:
// stringToWords("Hello world!"); // ["Hello", "world!"]