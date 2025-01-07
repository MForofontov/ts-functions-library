/**
 * Generates a random alphanumeric string of a given length.
 * 
 * @param length - The length of the generated string.
 * @returns A random alphanumeric string of the specified length.
 * @throws An error if the length is invalid.
 */
export function generateRandomAlphanumeric(length: number): string {
    if (isNaN(length) || length < 0) {
        throw new Error('Length must be a non-negative number');
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Example usage:
// generateRandomAlphanumeric(10); // e.g., "aB3dE5fG7H"