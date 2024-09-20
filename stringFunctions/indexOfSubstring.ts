/**
 * Finds the index of the first occurrence of a substring in a string.
 * 
 * @param str - The string to search in.
 * @param substr - The substring to find.
 * @returns The index of the first occurrence, or -1 if not found.
 */
export function indexOfSubstring(str: string, substr: string): number {
    return str.indexOf(substr);
}

// Example usage:
// indexOfSubstring("hello world", "world"); // 6