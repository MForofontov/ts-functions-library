/**
 * Counts the number of times a character appears in a string.
 * 
 * @param str - The string to analyze.
 * @param char - The character to count.
 * @returns The count of occurrences.
 */
export function countCharacterOccurrences(str: string, char: string): number {
    return (str.match(new RegExp(char, 'g')) || []).length;
}

// Example usage:
// countCharacterOccurrences("hello world", "l"); // 3