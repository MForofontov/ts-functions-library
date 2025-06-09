/**
 * Converts the first letter of a string to uppercase.
 *
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage:
// capitalizeFirstLetter("hello"); // "Hello"
