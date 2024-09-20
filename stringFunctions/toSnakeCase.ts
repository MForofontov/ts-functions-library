/**
 * Converts a string to snake_case (lowercase with words separated by underscores).
 * 
 * @param str - The string to convert.
 * @returns The snake-cased string.
 */
export function toSnakeCase(str: string): string {
    return str
        .toLowerCase()
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .replace(/[^\w\-]+/g, ''); // Remove non-word chars
}

// Example usage:
// toSnakeCase("Hello World! How Are You?"); // "hello_world_how_are_you"