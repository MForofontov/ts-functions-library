/**
 * Extracts the domain name from a URL string.
 *
 * @param url - The URL to extract the domain from.
 * @returns The domain name in lowercase, or an empty string for invalid URLs.
 *
 * @example
 * // Basic usage
 * extractDomain('https://www.Example.com/path'); // Returns 'example.com'
 *
 * @example
 * // Handles subdomains
 * extractDomain('https://blog.example.com'); // Returns 'blog.example.com'
 *
 * @example
 * // Invalid URLs return an empty string
 * extractDomain('not a url'); // Returns ''
 *
 * @note The function uses the built-in URL constructor for parsing. The
 * "www." prefix is removed for convenience.
 *
 * @complexity O(1)
 */
export function extractDomain(url: string): string {
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, '').toLowerCase();
  } catch {
    return '';
  }
}
