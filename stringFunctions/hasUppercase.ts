/**
 * Checks if a string contains any uppercase letters.
 *
 * @param str - The string to check.
 * @returns True if the string contains uppercase letters, false otherwise.
 */
export function hasUppercase(str: string): boolean {
  return /[A-Z]/.test(str);
}

// Example usage:
// hasUppercase("Hello"); // true
// hasUppercase("hello"); // false
