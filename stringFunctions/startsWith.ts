/**
 * Checks if a string starts with a specified substring.
 *
 * @param str - The string to check.
 * @param start - The substring to check for.
 * @returns True if the string starts with the substring, false otherwise.
 *
 * @example
 * startsWith("hello world", "hello"); // true
 *
 */
export function startsWith(str: string, start: string): boolean {
  return str.startsWith(start);
}
