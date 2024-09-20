import { capitalizeFirstLetter } from './capitalizeFirstLetter';

/**
 * Capitalizes the first letter of each word in a string.
 * 
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalizeEachWord(str: string): string {
    return str
        .split(' ')
        .map(word => capitalizeFirstLetter(word))
        .join(' ');
}

// Example usage:
// capitalizeEachWord("hello world"); // "Hello World"