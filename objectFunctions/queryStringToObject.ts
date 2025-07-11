/**
 * Converts a URL query string into an object with parameter names as keys.
 *
 * @param queryString - The URL query string to parse (without the leading '?').
 * @returns An object containing the parsed query parameters.
 * @throws When input is not a string.
 *
 * @example
 * // Basic usage
 * queryStringToObject('name=John%20Doe&age=30');
 * // => { name: 'John Doe', age: '30' }
 *
 * @example
 * // Empty string
 * queryStringToObject('');
 * // => {}
 *
 * @note If a parameter appears multiple times, only the last value is preserved.
 * @note All values are returned as strings, even if they represent numbers or other types.
 * @note Automatically decodes URL-encoded components (spaces, special characters, etc).
 */
export function queryStringToObject(queryString: string): Record<string, any> {
  if (typeof queryString !== 'string') {
    throw new TypeError('Input must be a string');
  }
  const str = queryString.replace(/^\?/, '').trim();
  if (str === '') return {};

  return str
    .split('&')
    .filter(Boolean)
    .map((param) => param.split('='))
    .reduce(
      (acc, [key, value]) => {
        if (key) {
          acc[decodeURIComponent(key)] = decodeURIComponent(value ?? '');
        }
        return acc;
      },
      {} as Record<string, any>,
    );
}
