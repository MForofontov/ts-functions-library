/**
 * Replaces all occurrences of a substring in a string with a new substring.
 * 
 * @param str - The string to search within.
 * @param searchValue - The substring to find.
 * @param replaceValue - The substring to replace with.
 * @returns The string with all occurrences of the substring replaced.
 */
export function replaceSubstring(str: string, searchValue: string, replaceValue: string): string {
    return str.split(searchValue).join(replaceValue);
}

// Example usage:
// replaceSubstring("hello world world", "world", "everyone"); // "hello everyone everyone"
// replaceSubstring("foo bar foo bar", "foo", "baz"); // "baz bar baz bar"