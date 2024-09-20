/**
 * Joins an array of words into a sentence with proper spacing.
 * 
 * @param words - The array of words to join.
 * @returns The joined sentence.
 */
export function wordsToSentence(words: string[]): string {
    return words.join(' ');
}

// Example usage:
// wordsToSentence(["Hello", "world!"]); // "Hello world!"