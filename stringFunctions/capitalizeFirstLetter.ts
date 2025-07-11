/**
 * Converts the first letter of a string to uppercase.
 *
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 *
 * @example
 * capitalizeFirstLetter("hello"); // "Hello"
 *
 */
export function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
