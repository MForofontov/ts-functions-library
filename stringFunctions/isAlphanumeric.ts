/**
 * Checks if a string contains only alphanumeric characters (letters and digits).
 *
 * @param str - The string to check.
 * @returns True if the string contains only alphanumeric characters, false otherwise.
 *
 * @example
 * isAlphanumeric("Hello123"); // true
 * isAlphanumeric("Hello!"); // false
 *
 */
export function isAlphanumeric(str: string): boolean {
  return /^[A-Za-z0-9]+$/.test(str);
}

