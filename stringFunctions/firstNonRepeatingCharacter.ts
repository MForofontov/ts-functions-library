/**
 * Finds the first non-repeating character in a string.
 *
 * @param str - The string to analyze.
 * @returns The first non-repeating character, or null if none exist.
 *
 * @example
 * firstNonRepeatingCharacter("abacabad"); // 'c'
 *
 */
export function firstNonRepeatingCharacter(str: string): string | null {
  // Create an object to store the count of each character
  const charCount: { [key: string]: number } = {};

  // Iterate over each character in the string
  for (const char of str) {
    // Increment the count for the character in the charCount object
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate over each character in the string again
  for (const char of str) {
    // If the character count is 1, return the character as it is non-repeating
    if (charCount[char] === 1) return char;
  }

  // If no non-repeating character is found, return null
  return null;
}
