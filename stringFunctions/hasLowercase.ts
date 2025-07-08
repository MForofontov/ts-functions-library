/**
 * Checks if a string contains any lowercase letters.
 *
 * @param str - The string to check.
 * @returns True if the string contains lowercase letters, false otherwise.
 *
 * @example
 * hasLowercase("Hello"); // true
 * hasLowercase("HELLO"); // false
 *
 */
export function hasLowercase(str: string): boolean {
  return /[a-z]/.test(str);
}

