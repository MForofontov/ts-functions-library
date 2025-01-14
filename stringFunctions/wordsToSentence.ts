/**
 * Joins an array of words into a sentence with proper spacing.
 * 
 * @param words - The array of words to join.
 * @returns The joined sentence.
 */
export function wordsToSentence(words: string[]): string {
    if (!Array.isArray(words) || words.length === 0) {
        return '';
    }
    return words.filter(word => word.trim() !== '').join(' ');
}

// Example usage:
// wordsToSentence(["Hello", "world!"]); // "Hello world!"
// wordsToSentence([]); // ""
// wordsToSentence(["Hello", "", "world!"]); // "Hello world!"