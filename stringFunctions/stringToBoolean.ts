/**
 * Converts a string to a boolean value.
 * 
 * @param str - The string to convert.
 * @returns The corresponding boolean value.
 */
export function stringToBoolean(str: string): boolean {
    return /^(true|1)$/i.test(str);
}

// Example usage:
// stringToBoolean("true"); // true
// stringToBoolean("false"); // false