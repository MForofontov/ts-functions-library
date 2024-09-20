/**
 * Replaces the first occurrence of a substring in a string.
 * 
 * @param str - The original string.
 * @param target - The substring to replace.
 * @param replacement - The substring to replace with.
 * @returns The modified string.
 */
export function replaceFirst(str: string, target: string, replacement: string): string {
    const index = str.indexOf(target);
    if (index === -1) return str; // Target not found
    return str.slice(0, index) + replacement + str.slice(index + target.length);
}

// Example usage:
// replaceFirst("hello world, hello universe", "hello", "hi"); // "hi world, hello universe"
