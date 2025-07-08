/**
 * Extracts a substring from a string based on the starting index and length.
 *
 * @param str - The original string.
 * @param start - The starting index.
 * @param length - The length of the substring.
 * @returns The extracted substring.
 * @throws An error if the start index or length is invalid.
 *
 * @example
 * extractSubstring("hello world", 6, 5); // "world"
 *
 */
export function extractSubstring(
  str: string,
  start: number,
  length: number,
): string {
  if (isNaN(start) || isNaN(length)) {
    throw new Error('Start index and length must be numbers');
  }
  if (start > str.length) {
    throw new Error(
      'Start index must be less than or equal to the string length',
    );
  }
  if (start < 0) {
    throw new Error('Start index must be non-negative');
  }
  return str.slice(start, start + length);
}

