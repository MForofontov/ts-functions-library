/**
 * Reverses the order of words in a given string.
 * 
 * @param str - The string whose words need to be reversed.
 * @returns The string with the order of words reversed.
 */
export function reverseWords(str: string): string {
    if (!str.trim()) return '';
    return str.split(/\s+/).reverse().join(' ');
}

// Example usage:
// reverseWords("hello world"); // "world hello"
// reverseWords("The quick brown fox"); // "fox brown quick The"
// reverseWords("   "); // ""