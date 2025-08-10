/**
 * Converts a string into a URL-friendly slug.
 *
 * @param str - The string to convert.
 * @returns The slugified string.
 *
 * @example
 * slugify("Hello World!"); // "hello-world"
 * slugify("  This is a test.  "); // "this-is-a-test"
 *
 * @note Sequential regex replacements and string operations create multiple
 * passes over the input string but keep the logic readable.
 *
 * @complexity O(n) where n is the length of the input string.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
