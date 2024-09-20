/**
 * Truncates a string to a specified length and appends an ellipsis if truncated.
 * 
 * @param str - The string to truncate.
 * @param maxLength - The maximum length of the resulting string.
 * @returns The truncated string with an ellipsis if necessary.
 */
export function truncateString(str: string, maxLength: number): string {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
}

// Example usage:
// truncateString("This is a long string that needs to be truncated.", 20); // "This is a long st..."