/**
 * Finds the index of the last occurrence of a substring in a string.
 * 
 * @param str - The string to search in.
 * @param substr - The substring to find.
 * @returns The index of the last occurrence, or -1 if not found.
 */
export function lastIndexOfSubstring(str: string, substr: string): number {
    return str.lastIndexOf(substr);
}

// Example usage:
// lastIndexOfSubstring("hello world, hello universe", "hello"); // 13