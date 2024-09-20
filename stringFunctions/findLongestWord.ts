/**
 * Finds the longest word in a string.
 * 
 * @param str - The string to analyze.
 * @returns The longest word in the string.
 */
export function findLongestWord(str: string): string {
    return str.split(' ').reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
}

// Example usage:
// findLongestWord("The quick brown fox jumps over the lazy dog."); // "jumps"