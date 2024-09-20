/**
 * Extracts a substring from a string based on the starting index and length.
 * 
 * @param str - The original string.
 * @param start - The starting index.
 * @param length - The length of the substring.
 * @returns The extracted substring.
 */
export function extractSubstring(str: string, start: number, length: number): string {
    return str.slice(start, start + length);
}

// Example usage:
// extractSubstring("hello world", 6, 5); // "world"