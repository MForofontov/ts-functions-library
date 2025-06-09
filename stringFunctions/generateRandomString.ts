/**
 * Generates a random string of a given length from a specified character set.
 *
 * @param length - The length of the generated string.
 * @param charset - The character set to use for generating the string.
 * @returns A random string of the specified length from the specified character set.
 * @throws An error if the length is invalid or the charset is empty.
 */
export function generateRandomString(
  length: number,
  charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
): string {
  if (isNaN(length) || length < 0) {
    throw new Error('Length must be a non-negative number');
  }
  if (charset.length === 0) {
    throw new Error('Charset must contain at least one character');
  }
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

// Example usage:
// generateRandomString(10, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'); // e.g., "aB3dE5fG7H"
