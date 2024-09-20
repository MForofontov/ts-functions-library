/**
 * Counts the number of words in a string.
 * 
 * @param str - The string to analyze.
 * @returns The number of words in the string.
 */
export function countWords(str: string): number {
    return str.trim().split(/\s+/).length;
}

// Example usage:
// countWords("Hello world! This is a test."); // 6