/**
 * Converts a string to a slug format (lowercase, spaces replaced with hyphens).
 * 
 * @param str - The string to convert.
 * @returns The slugified string.
 */
export function slugify(str: string): string {
    return str
        .toLowerCase()
        .replace(/[\s]+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple hyphens with a single one
        .replace(/^-+|-+$/g, ''); // Trim hyphens from start and end
}

// Example usage:
// slugify("Hello World! How are you?"); // "hello-world-how-are-you"