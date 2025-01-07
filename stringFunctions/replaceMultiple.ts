/**
 * Replaces multiple substrings in a string with their corresponding replacements.
 * 
 * @param str - The string to search within.
 * @param replacements - An object where keys are substrings to find and values are substrings to replace with.
 * @returns The string with all specified substrings replaced.
 */
export function replaceMultiple(str: string, replacements: { [key: string]: string }): string {
    let result = str;
    for (const [searchValue, replaceValue] of Object.entries(replacements)) {
        result = result.split(searchValue).join(replaceValue);
    }
    return result;
}

// Example usage:
// replaceMultiple("hello world", { "hello": "hi", "world": "everyone" }); // "hi everyone"
// replaceMultiple("foo bar baz", { "foo": "qux", "bar": "quux" }); // "qux quux baz"