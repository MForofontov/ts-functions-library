/**
 * Safely parses a JSON string, returning a fallback value on failure.
 *
 * @param jsonString - The JSON string to parse.
 * @param defaultValue - The default value to return if parsing fails.
 * @returns The parsed object, or the default value if parsing fails.
 *
 * @example
 * // Basic usage
 * safeJSONParse('{"name":"John"}', {}); // { name: 'John' }
 *
 * @example
 * // With malformed JSON
 * safeJSONParse('Invalid JSON', {}); // {}
 *
 * @note Wraps JSON.parse in a try/catch block.
 * Useful when dealing with untrusted data.
 *
 * @complexity O(n) where n is the length of the JSON string
 */
export function safeJSONParse<T>(jsonString: string, defaultValue: T): T {
  try {
    return JSON.parse(jsonString);
  } catch {
    return defaultValue;
  }
}

