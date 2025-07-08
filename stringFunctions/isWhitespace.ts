/**
 * Checks if a string contains only whitespace characters.
 *
 * @param str - The string to check.
 * @returns True if the string contains only whitespace characters, false otherwise.
 *
 * @example
 * isWhitespace("   "); // true
 * isWhitespace("Hello World"); // false
 *
 */
export function isWhitespace(str: string): boolean {
  return /^\s*$/.test(str);
}

