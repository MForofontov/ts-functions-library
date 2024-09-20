/**
 * Checks if a string is a valid email address.
 * 
 * @param email - The string to check.
 * @returns True if the string is a valid email address, false otherwise.
 */
export function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Example usage:
// isValidEmail("test@example.com"); // true
// isValidEmail("invalid-email"); // false