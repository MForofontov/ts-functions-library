/**
 * Reverses the given string.
 *
 * @param str - The string to reverse.
 * @returns The reversed string.
 *
 * @example
 * reverseString("hello"); // "olleh"
 * reverseString("12345"); // "54321"
 *
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

