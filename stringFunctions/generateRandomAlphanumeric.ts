/**
 * Generates a random alphanumeric string of a specified length.
 * 
 * @param length - The desired length of the output string.
 * @returns The generated random alphanumeric string.
 */
export function generateRandomAlphanumeric(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

// Example usage:
// generateRandomAlphanumeric(10); // e.g., "a1B2c3D4e5"