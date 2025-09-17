/**
 * Validates if a string is a valid URL.
 *
 * @param url - The URL string to validate.
 * @param protocols - Array of allowed protocols (default: ['http', 'https']).
 * @returns True if the URL is valid, false otherwise.
 *
 * @throws {TypeError} If url is not a string or protocols is not an array.
 *
 * @example
 * // Valid URLs
 * isValidURL("https://example.com"); // true
 *
 * @example
 * // Invalid URLs
 * isValidURL("not-a-url"); // false
 *
 * @example
 * // Custom protocols
 * isValidURL("ftp://example.com", ["ftp", "ftps"]); // true
 *
 * @note Uses the URL constructor for validation which follows RFC 3986.
 *
 * @complexity Time: O(n), Space: O(1)
 */
export function isValidURL(
  url: string,
  protocols: string[] = ['http', 'https'],
): boolean {
  if (typeof url !== 'string') {
    throw new TypeError(`url must be a string, got ${typeof url}`);
  }

  if (!Array.isArray(protocols)) {
    throw new TypeError(`protocols must be an array, got ${typeof protocols}`);
  }

  try {
    const urlObject = new URL(url);
    return protocols.includes(urlObject.protocol.slice(0, -1)); // Remove trailing ':'
  } catch {
    return false;
  }
}
