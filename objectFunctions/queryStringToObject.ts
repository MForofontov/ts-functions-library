/**
 * Converts a query string to an object.
 * 
 * This function takes a URL-encoded query string and converts it to an object.
 * 
 * @param {string} queryString - The query string to convert.
 * @returns {Record<string, any>} - An object representing the query string.
 * @throws {TypeError} - If the input is not a string.
 * 
 * @example
 * const queryString = 'name=John%20Doe&age=30';
 * const result = queryStringToObject(queryString);
 * // result: { name: 'John Doe', age: '30' }
 */
export function queryStringToObject(queryString: string): Record<string, any> {
    if (typeof queryString !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return queryString
        .split('&')
        .map(param => param.split('='))
        .reduce((acc, [key, value]) => {
            acc[decodeURIComponent(key)] = decodeURIComponent(value);
            return acc;
        }, {} as Record<string, any>);
}