/**
 * Counts the number of vowels in a string.
 *
 * @param str - The string to analyze.
 * @returns The number of vowels in the string.
 *
 * @example
 * countVowels("Hello world"); // 3
 *
 */
export function countVowels(str: string): number {
  return (str.match(/[aeiou]/gi) || []).length;
}

