/**
 * Converts a string to an array of words.
 * 
 * @param str - The string to split into words.
 * @returns An array of words.
 */
export function stringToWords(str: string): string[] {
    return str
        .trim() // Trim leading and trailing spaces
        .split(/\s+/) // Split by one or more whitespace characters
        .filter(word => word.length > 0); // Filter out empty strings
}

// Example usage:
// stringToWords("Hello world!"); // ["Hello", "world!"]