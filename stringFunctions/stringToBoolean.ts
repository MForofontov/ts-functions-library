/**
 * Converts a string to a boolean value.
 *
 * @param str - The string to convert.
 * @returns The corresponding boolean value.
 *
 * @example
 * stringToBoolean("true"); // true
 * stringToBoolean("false"); // false
 *
 */
export function stringToBoolean(str: string): boolean {
  const normalizedStr = str.trim().toLowerCase();
  return normalizedStr === 'true' || normalizedStr === '1';
}

