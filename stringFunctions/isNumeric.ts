/**
 * Checks if a string contains only digits.
 *
 * @param str - The string to check.
 * @returns True if the string contains only digits, false otherwise.
 *
 * @example
 * isNumeric("12345"); // true
 * isNumeric("123a5"); // false
 *
 */
export function isNumeric(str: string): boolean {
  return /^\d+$/.test(str);
}

