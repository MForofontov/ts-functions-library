/**
 * Finds and replaces multiple substrings within a string.
 * 
 * @param str - The original string.
 * @param replacements - An object containing key-value pairs of substrings to replace and their replacements.
 * @returns The modified string with replacements applied.
 */
export function replaceMultiple(str: string, replacements: { [key: string]: string }): string {
    return Object.keys(replacements).reduce((result, key) => {
        return result.replace(new RegExp(key, 'g'), replacements[key]);
    }, str);
}

// Example usage:
// replaceMultiple("Hello World! Hello Universe!", { "Hello": "Hi", "World": "Earth" }); // "Hi Earth! Hi Universe!"
