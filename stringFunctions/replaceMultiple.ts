/**
 * Replaces multiple substrings in a string with their corresponding replacements.
 *
 * @param str - The string to search within.
 * @param replacements - An object where keys are substrings to find and values are substrings to replace with.
 * @returns The string with all specified substrings replaced.
 *
 * @example
 * replaceMultiple("hello world", { "hello": "hi", "world": "everyone" }); // "hi everyone"
 * replaceMultiple("foo bar baz", { "foo": "qux", "bar": "quux" }); // "qux quux baz"
 *
 */
export function replaceMultiple(
  str: string,
  replacements: { [key: string]: string },
): string {
  const replacementKeys = Object.keys(replacements);

  if (replacementKeys.length === 0) {
    return str;
  }

  const escapedKeys = replacementKeys.map(
    (key) => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), // Escape special regex characters
  );

  const regex = new RegExp(escapedKeys.join('|'), 'g');

  return str.replace(regex, (match) => replacements[match]);
}
