/**
 * Converts an object into a URL-encoded query string suitable for HTTP requests.
 *
 * @param obj - The object whose properties will be converted to query parameters.
 * @returns A URL-encoded query string without the leading '?'.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Basic usage
 * objectToQueryString({ name: 'John Doe', age: 30 });
 * // => 'name=John%20Doe&age=30'
 *
 * @example
 * // With special characters
 * objectToQueryString({ search: 'price>100', tags: 'promo,sale' });
 * // => 'search=price%3E100&tags=promo%2Csale'
 *
 * @note All values are converted to strings before encoding.
 * @note Does not handle nested objects or arrays in a special way - they'll be converted using toString().
 * @note Does not include the leading '?' character used in URLs.
 */
export function objectToQueryString(obj: Record<string, any>): string {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&');
}
