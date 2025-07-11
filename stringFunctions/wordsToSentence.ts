/**
 * Joins an array of words into a sentence with proper spacing.
 *
 * @param words - The array of words to join.
 * @returns The joined sentence.
 *
 * @example
 * wordsToSentence(["Hello", "world!"]); // "Hello world!"
 * wordsToSentence([]); // ""
 * wordsToSentence(["Hello", "", "world!"]); // "Hello world!"
 *
 */
export function wordsToSentence(words: string[]): string {
  if (!Array.isArray(words) || words.length === 0) {
    return '';
  }
  return words
    .map((word) => word.trim()) // Trim each word
    .filter((word) => word !== '') // Filter out empty words
    .join(' ');
}
