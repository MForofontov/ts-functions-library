/**
 * Repeats a string until it reaches a specified length.
 * 
 * @param str - The string to repeat.
 * @param length - The desired length of the output string.
 * @returns The repeated string truncated to the desired length.
 */
export function repeatUntilLength(str: string, length: number): string {
    return (str.repeat(Math.ceil(length / str.length))).substring(0, length);
}

// Example usage:
// repeatUntilLength("abc", 10); // "abcabcabca"