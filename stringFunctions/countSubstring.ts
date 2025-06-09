/**
 * Counts the number of times a substring appears in a string.
 *
 * @param str - The string to analyze.
 * @param substring - The substring to count.
 * @returns The count of occurrences.
 */
export function countSubstring(str: string, substring: string): number {
  if (substring.length === 0) return 0;
  return (str.match(new RegExp(substring, 'g')) || []).length;
}

// Example usage:
// countSubstring("hello world, hello universe", "hello"); // 2
