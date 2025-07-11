/**
 * Finds the longest word in a string, ignoring punctuation and special characters.
 *
 * @param str - The string to analyze.
 * @returns The longest word in the string.
 *
 * @example
 * console.log(findLongestWord("The quick brown fox jumps over the lazy dog.")); // "jumps"
 *
 */
export function findLongestWord(str: string): string {
  // Remove punctuation and special characters
  const cleanedStr = str.replace(
    /[.,\/#!$%\^&\*;:{}=\-_`~()"\t\n\r\b\f\v\\\'\"]/g,
    ' ',
  );

  // Split the string into words using any whitespace character as the delimiter
  return cleanedStr.split(/\s+/).reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
}
