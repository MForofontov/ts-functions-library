/**
 * Capitalizes the nth letter of a given string.
 *
 * @param str - The string to process.
 * @param n - The position of the letter to capitalize (0-based index).
 * @returns A new string with the nth letter capitalized.
 */
export function capitalizeNthLetter(str: string, n: number): string {
  if (n < 0 || n >= str.length) return str;
  return str.slice(0, n) + str.charAt(n).toUpperCase() + str.slice(n + 1);
}

// Example usage:
// capitalizeNthLetter("hello world", 6); // "hello World"
