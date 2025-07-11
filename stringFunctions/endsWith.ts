/**
 * Checks if a string ends with a specified substring.
 *
 * @param str - The string to check.
 * @param end - The substring to check for.
 * @returns True if the string ends with the substring, false otherwise.
 *
 * @example
 * endsWith("hello world", "world"); // true
 *
 */
export function endsWith(str: string, end: string): boolean {
  return str.endsWith(end);
}
