/**
 * Serializes an object into a query string.
 * 
 * @param {Record<string, any>} obj - The object to serialize.
 * @returns {string} - A query string representing the object.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function objectToQueryString(obj: Record<string, any>): string {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return '?' + Object.keys(obj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&');
}

// Example usage:
// objectToQueryString({ name: 'John', age: 30 }); // "?name=John&age=30"