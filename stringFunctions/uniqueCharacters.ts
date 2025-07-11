/**
 * Finds the unique characters in a string.
 *
 * @param str - The string to analyze.
 * @returns An array of unique characters.
 *
 * @example
 * uniqueCharacters("hello"); // ['h', 'e', 'l', 'o']
 *
 */
export function uniqueCharacters(str: string): string[] {
  return Array.from(new Set(str));
}
