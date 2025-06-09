/**
 * Converts a string to a number. Returns NaN if the string contains invalid characters.
 *
 * @param str - The string to convert to a number.
 * @returns The converted number, or NaN if the string contains invalid characters.
 */
export function stringToNumber(str: string): number {
  // Trim the input string to remove leading and trailing whitespace
  const trimmedStr = str.trim();

  // Use a regular expression to check if the trimmed string is a valid number
  if (/^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(trimmedStr)) {
    // If the string is a valid number, convert it to a number using parseFloat
    return parseFloat(trimmedStr);
  }

  // If the string is not a valid number, return NaN
  return NaN;
}

// Example usage:
// stringToNumber("123"); // 123
// stringToNumber("abc"); // NaN
