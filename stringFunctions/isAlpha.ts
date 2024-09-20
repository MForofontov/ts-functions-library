// Example usage:
// toSnakeCase("Hello World! How Are You?"); // "hello_world_how_are_you"

/**
 * Checks if a string contains only alphabetical characters.
 * 
 * @param str - The string to check.
 * @returns True if the string contains only letters, false otherwise.
 */
export function isAlpha(str: string): boolean {
    return /^[A-Za-z]+$/.test(str);
}

// Example usage:
// isAlpha("Hello"); // true
// isAlpha("Hello123"); // false