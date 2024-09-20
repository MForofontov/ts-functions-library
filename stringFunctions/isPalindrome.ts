import { reverseString } from './reverseString';

/**
 * Checks if a string is a palindrome (reads the same forwards and backwards).
 * 
 * @param str - The string to check.
 * @returns True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str: string): boolean {
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanedStr === reverseString(cleanedStr);
}

// Example usage:
//