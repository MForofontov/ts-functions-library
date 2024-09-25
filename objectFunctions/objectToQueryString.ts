/**
 * Serializes an object into a query string.
 * 
 * @param obj - The object to serialize.
 * @returns A query string representing the object.
 */
export function objectToQueryString(obj: Record<string, any>): string {
    return '?' + Object.keys(obj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&');
}

// Example usage:
// objectToQueryString({ name: 'John', age: 30 }); // "?name=John&age=30"