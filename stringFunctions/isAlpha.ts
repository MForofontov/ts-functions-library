
/**
 * Checks if a string contains only alphabetical characters.
 *
 * @param str - The string to check.
 * @returns True if the string contains only letters, false otherwise.
 *
 * @example
 * toSnakeCase("Hello World! How Are You?"); // "hello_world_how_are_you"
 *
 *
 * @example
 * isAlpha("Hello"); // true
 * isAlpha("Hello123"); // false
 *
 */
export function isAlpha(str: string): boolean {
  return /^[A-Za-z]+$/.test(str);
}

