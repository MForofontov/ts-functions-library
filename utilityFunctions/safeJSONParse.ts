/**
 * Safely parses a JSON string, returning a default value if parsing fails.
 * 
 * @param jsonString - The JSON string to parse.
 * @param defaultValue - The default value to return if parsing fails.
 * @returns The parsed object, or the default value if parsing fails.
 */
export function safeJSONParse<T>(jsonString: string, defaultValue: T): T {
    try {
        return JSON.parse(jsonString);
    } catch {
        return defaultValue;
    }
}

// Example usage:
// safeJSONParse('{"name":"John"}', {}); // { name: "John" }
// safeJSONParse('Invalid JSON', {}); // {}