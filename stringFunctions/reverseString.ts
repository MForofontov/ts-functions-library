/**
 * Reverses a given string.
 * 
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example usage:
// reverseString("hello"); // "olleh"