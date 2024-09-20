/**
 * Converts a string to kebab-case (lowercase with words separated by hyphens).
 * 
 * @param str - The string to convert.
 * @returns The kebab-cased string.
 */
export function toKebabCase(str: string): string {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, ''); // Remove non-word chars
}

// Example usage:
// toKebabCase("Hello World! How Are You?"); // "hello-world-how-are-you"