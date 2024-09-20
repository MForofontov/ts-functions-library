/**
 * Generates a random string of a specified length using characters from a given set.
 * 
 * @param length - The length of the random string.
 * @param chars - The characters to use for generating the string (default is alphanumeric).
 * @returns The generated random string.
 */
export function generateRandomString(length: number, chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

// Example usage:
// generateRandomString(10); // e.g., "a1B2c3D4e5"