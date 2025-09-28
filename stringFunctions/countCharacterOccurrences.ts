/**
 * Counts the number of times a character appears in a string.
 *
 * @param str - The string to analyze.
 * @param char - The character to count.
 * @returns The count of occurrences.
 *
 * @example
 * countCharacterOccurrences("hello world", "l"); // 3
 *
 */
export function countCharacterOccurrences(str: string, char: string): number {
  if (!char) {
    return 0;
  }

  const escapedChar = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  return (str.match(new RegExp(escapedChar, 'g')) || []).length;
}
