/**
 * Replaces multiple substrings in a string with their corresponding replacements.
 *
 * @param str - The string to search within.
 * @param replacements - An object where keys are substrings to find and values are substrings to replace with.
 * @returns The string with all specified substrings replaced.
 */
export function replaceMultiple(
  str: string,
  replacements: { [key: string]: string },
): string {
  const escapedKeys = Object.keys(replacements).map(
    (key) => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), // Escape special regex characters
  );

  const regex = new RegExp(escapedKeys.join('|'), 'g');

  return str.replace(regex, (match) => replacements[match]);
}

// Example usage:
// replaceMultiple("hello world", { "hello": "hi", "world": "everyone" }); // "hi everyone"
// replaceMultiple("foo bar baz", { "foo": "qux", "bar": "quux" }); // "qux quux baz"
