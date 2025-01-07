/**
 * Repeats a string a specified number of times.
 * 
 * @param str - The string to repeat.
 * @param count - The number of times to repeat the string.
 * @returns The repeated string.
 * @throws Will throw an error if the count is not a number or is negative.
 */
export function repeatString(str: string, count: number): string {
    if (isNaN(count)) {
        throw new Error('Count must be a number');
    }
    if (count < 0) {
        throw new Error('Count must be non-negative');
    }
    if (count === 0) {
        return '';
    }
    return str.repeat(count);
}

// Example usage:
// repeatString("hello", 3); // "hellohellohello"