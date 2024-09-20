/**
 * Finds the first non-repeating character in a string.
 * 
 * @param str - The string to analyze.
 * @returns The first non-repeating character, or null if none exist.
 */
export function firstNonRepeatingCharacter(str: string): string | null {
    const charCount: { [key: string]: number } = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of str) {
        if (charCount[char] === 1) return char;
    }
    return null;
}

// Example usage:
// firstNonRepeatingCharacter("abacabad"); // 'c'