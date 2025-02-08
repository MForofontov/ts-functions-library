/**
 * Converts an object to a query string.
 * 
 * This function takes an object and converts it to a URL-encoded query string.
 * 
 * @param {Record<string, any>} obj - The object to convert.
 * @returns {string} - A URL-encoded query string.
 * @throws {TypeError} - If the input is not a non-null object.
 * 
 * @example
 * const obj = { name: 'John Doe', age: 30 };
 * const result = objectToQueryString(obj);
 * // result: 'name=John%20Doe&age=30'
 */
export function objectToQueryString(obj: Record<string, any>): string {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}