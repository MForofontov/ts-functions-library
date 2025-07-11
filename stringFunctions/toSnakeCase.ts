/**
 * Converts a string to snake_case (lowercase with words separated by underscores).
 *
 * @param str - The string to convert.
 * @returns The snake-cased string.
 *
 * @example
 * toSnakeCase("Hello World! How Are You?"); // "hello_world_how_are_you"
 *
 */
export function toSnakeCase(str: string): string {
  return str
    .trim() // Trim leading and trailing spaces
    .toLowerCase()
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/[^\w\-]+/g, '') // Remove non-word chars
    .replace(/__+/g, '_') // Replace multiple underscores with a single one
    .replace(/^_+|_+$/g, ''); // Trim underscores from start and end
}
