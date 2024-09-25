/**
 * Parses a query string into an object.
 * 
 * @param queryString - The query string to parse.
 * @returns An object representing the query parameters.
 */
export function parseQueryString(queryString: string): Record<string, string> {
    return queryString
        .replace(/^\?/, '')
        .split('&')
        .reduce((acc, queryParam) => {
            const [key, value] = queryParam.split('=');
            acc[decodeURIComponent(key)] = decodeURIComponent(value || '');
            return acc;
        }, {} as Record<string, string>);
}

// Example usage:
// parseQueryString('?name=John&age=30'); // { name: "John", age: "30" }