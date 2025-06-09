/**
 * Checks if a string contains only whitespace characters.
 *
 * @param str - The string to check.
 * @returns True if the string contains only whitespace characters, false otherwise.
 */
export function isWhitespace(str: string): boolean {
  return /^\s*$/.test(str);
}

// Example usage:
// isWhitespace("   "); // true
// isWhitespace("Hello World"); // false
