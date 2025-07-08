/**
 * Reverses the words in a string and removes trailing white spaces.
 *
 * @param str - The string to reverse the words in.
 * @returns The string with the words reversed and trailing white spaces removed.
 *
 * @example
 * reverseWords("hello world"); // "world hello"
 * reverseWords("The quick brown fox"); // "fox brown quick The"
 * reverseWords("   "); // ""
 *
 */
export function reverseWords(str: string): string {
  if (!str.trim()) return '';

  // Split the string into words, filter out empty strings, reverse the array, and join back into a string
  return str.trim().split(/\s+/).reverse().join(' ');
}

