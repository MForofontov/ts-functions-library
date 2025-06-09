/**
 * Counts the number of consonants in a string.
 *
 * @param str - The string to analyze.
 * @returns The number of consonants in the string.
 */
export function countConsonants(str: string): number {
  return (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
}

// Example usage:
// countConsonants("Hello world"); // 7
