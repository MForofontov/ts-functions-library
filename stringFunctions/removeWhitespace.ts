/**
 * Removes all whitespace characters from a string.
 *
 * @param str - The string to process.
 * @returns The string with all whitespace removed.
 *
 * @example
 * removeWhitespace("   hello   world   "); // "helloworld"
 *
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, '');
}

