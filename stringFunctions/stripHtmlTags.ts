/**
 * Strips HTML tags from a string.
 * 
 * @param str - The string to process.
 * @returns The string with HTML tags removed.
 */
export function stripHtmlTags(str: string): string {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
}

// Example usage:
// stripHtmlTags("<p>Hello <b>world</b></p>"); // "Hello world"