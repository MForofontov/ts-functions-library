/**
 * Repeats a string a specified number of times.
 * 
 * @param str - The string to repeat.
 * @param count - The number of times to repeat the string.
 * @returns The repeated string.
 */
export function repeatString(str: string, count: number): string {
    return str.repeat(count);
}

// Example usage:
// repeatString("hello", 3); // "hellohellohello"