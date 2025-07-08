/**
 * Counts the number of words in a string.
 *
 * @param str - The string to analyze.
 * @returns The number of words in the string.
 *
 * @example
 * countWords("Hello world! This is a test."); // 6
 *
 */
export function countWords(str: string): number {
  if (str.trim() === '') {
    return 0;
  }
  return str.trim().split(/\s+/).length;
}

