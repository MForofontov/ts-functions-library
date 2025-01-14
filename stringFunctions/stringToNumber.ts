/**
 * Converts a string to a number, returning NaN if it can't be converted.
 * 
 * @param str - The string to convert.
 * @returns The converted number or NaN if the conversion fails.
 */
export function stringToNumber(str: string): number {
    const num = parseFloat(str);
    return isNaN(num) ? NaN : num;
}

// Example usage:
// stringToNumber("123"); // 123
// stringToNumber("abc"); // NaN