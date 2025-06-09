/**
 * Finds the index of the last occurrence of a substring in a string.
 *
 * @param str - The string to search within.
 * @param substr - The substring to find.
 * @returns The index of the last occurrence of the substring, or -1 if not found.
 */
export function lastIndexOfSubstring(str: string, substr: string): number {
  return str.lastIndexOf(substr);
}

// Example usage:
// lastIndexOfSubstring("hello world world", "world"); // 12
// lastIndexOfSubstring("hello world", "foo"); // -1
