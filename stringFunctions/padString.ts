/**
 * Pads a string to a specified length with a given character.
 * 
 * @param str - The string to pad.
 * @param targetLength - The length of the resulting string once the current string has been padded.
 * @param padChar - The character to pad the string with.
 * @returns The padded string.
 * @throws An error if the target length is less than the string length or if padChar is not a single character.
 */
export function padString(str: string, targetLength: number, padChar: string = ' '): string {
    if (targetLength < str.length) {
        throw new Error('Target length must be greater than or equal to the string length');
    }
    if (padChar.length !== 1) {
        throw new Error('Pad character must be a single character');
    }
    return str.padStart((targetLength + str.length) / 2, padChar).padEnd(targetLength, padChar);
}

// Example usage:
// padString("hello", 10); // "  hello   "
// padString("hello", 10, '*'); // "**hello***"