/**
 * Pads a string with another string until it reaches a specified length.
 * 
 * @param str - The original string.
 * @param targetLength - The desired length of the output string.
 * @param padString - The string to pad with (default is a space).
 * @returns The padded string.
 */
export function padString(str: string, targetLength: number, padString: string = ' '): string {
    const pad = padString.repeat(Math.ceil((targetLength - str.length) / padString.length));
    return (pad + str).slice(-targetLength);
}

// Example usage:
// padString("test", 10, "*"); // "****test"