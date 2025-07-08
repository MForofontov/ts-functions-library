/**
 * Checks if a string is a palindrome.
 *
 * @param str - The string to check.
 * @returns True if the string is a palindrome, false otherwise.
 *
 * @example
 * isPalindrome("A man, a plan, a canal, Panama"); // true
 * isPalindrome("hello"); // false
 *
 */
export function isPalindrome(str: string): boolean {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

