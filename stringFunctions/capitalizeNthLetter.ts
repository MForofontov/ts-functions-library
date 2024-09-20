/**
 * Capitalizes every Nth letter in a string.
 * 
 * @param str - The string to process.
 * @param n - The interval of letters to capitalize.
 * @returns The modified string with every Nth letter capitalized.
 */
export function capitalizeNthLetter(str: string, n: number): string {
    return str.split('').map((char, index) => {
        return (index + 1) % n === 0 ? char.toUpperCase() : char;
    }).join('');
}

// Example usage:
// capitalizeNthLetter("hello world", 2); // "hElLo wOrLd"