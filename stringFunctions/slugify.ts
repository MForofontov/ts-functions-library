/**
 * Converts a string into a URL-friendly slug.
 *
 * @param str - The string to convert.
 * @returns The slugified string.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Example usage:
// slugify("Hello World!"); // "hello-world"
// slugify("  This is a test.  "); // "this-is-a-test"
