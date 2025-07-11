/**
 * Converts a string to kebab-case (lowercase with words separated by hyphens).
 *
 * @param str - The string to convert.
 * @returns The kebab-cased string.
 *
 * @example
 * toKebabCase("Hello World! How Are You?"); // "hello-world-how-are-you"
 *
 */
export function toKebabCase(str: string): string {
  return str
    .trim() // Trim leading and trailing spaces
    .toLowerCase()
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/[^\w\-]+/g, '') // Remove non-word chars
    .replace(/--+/g, '-') // Replace multiple hyphens with a single one
    .replace(/^-+|-+$/g, ''); // Trim hyphens from start and end
}
