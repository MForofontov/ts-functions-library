/**
 * Checks if a string contains only whitespace characters.
 * 
 * @param str - The string to check.
 * @returns True if the string contains only whitespace, false otherwise.
 */
export function isWhitespace(str: string): boolean {
    return str.trim().length === 0;
}

// Example usage:
// isWhitespace("   "); // true
// isWhitespace("abc"); // false