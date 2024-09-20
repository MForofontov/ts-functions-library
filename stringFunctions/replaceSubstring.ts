/**
 * Replaces all instances of a substring within a string with a new substring.
 * 
 * @param str - The original string.
 * @param target - The substring to replace.
 * @param replacement - The substring to replace with.
 * @returns The modified string.
 */
export function replaceSubstring(str: string, target: string, replacement: string): string {
    return str.split(target).join(replacement);
}

// Example usage:
// replaceSubstring("hello world", "world", "there"); // "hello there"
