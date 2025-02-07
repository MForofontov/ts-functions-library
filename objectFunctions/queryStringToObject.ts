/**
 * Converts a query string into an object.
 * 
 * @param {string} query - The query string to convert.
 * @returns {Record<string, string>} - An object representing the query string.
 * @throws {TypeError} - If the input is not a string.
 */
export function queryStringToObject(query: string): Record<string, string> {
    if (typeof query !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return Object.fromEntries(new URLSearchParams(query).entries());
}