/**
 * Reverses the words in a given string while maintaining their original order.
 * 
 * @param str - The string to process.
 * @returns The string with words reversed.
 */
export function reverseWords(str: string): string {
    return str.split(' ').reverse().join(' ');
}

// Example usage:
// reverseWords("Hello world"); // "world Hello"