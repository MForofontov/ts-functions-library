/**
 * Counts the number of occurrences of a substring within a string.
 * 
 * @param str - The string to search in.
 * @param substr - The substring to count.
 * @returns The number of occurrences of the substring.
 */
export function countSubstring(str: string, substr: string): number {
    return (str.match(new RegExp(substr, 'g')) || []).length;
}

// Example usage:
// countSubstring("hello world", "o"); // 2