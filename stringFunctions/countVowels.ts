/**
 * Counts the number of vowels in a string.
 *
 * @param str - The string to analyze.
 * @returns The number of vowels in the string.
 *
 * @example
 * countVowels("Hello world"); // 3
 *
 * @note Only the vowels a, e, i, o, and u are counted; "y" is ignored.
 *
 * @complexity O(n) where n is the length of the input string.
 */
export function countVowels(str: string): number {
  return (str.match(/[aeiou]/gi) || []).length;
}
