/**
 * Parses a query string into an object of key-value pairs.
 *
 * @param queryString - The query string to parse.
 * @returns An object representing the query parameters.
 *
 * @example
 * // Basic usage
 * parseQueryString('?name=John&age=30'); // { name: 'John', age: '30' }
 *
 * @note Decodes percent-encoded characters and replaces `+` with a space.
 * Returns an empty object for empty or missing query strings.
 *
 * @complexity O(n) where n is the number of parameters
 */
export function parseQueryString(queryString: string): Record<string, string> {
  if (!queryString || queryString === '?') {
    return {};
  }

  return queryString
    .replace(/^\?/, '')
    .replace(/\+/g, ' ')
    .split('&')
    .reduce(
      (acc, queryParam) => {
        const [key, value] = queryParam.split('=');
        acc[decodeURIComponent(key)] = decodeURIComponent(value || '');
        return acc;
      },
      {} as Record<string, string>,
    );
}

