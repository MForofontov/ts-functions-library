/**
 * Validates if a string is a valid email address.
 *
 * @param email - The email string to validate.
 * @returns True if the email is valid, false otherwise.
 *
 * @throws {TypeError} If email is not a string.
 *
 * @example
 * // Valid emails
 * isValidEmail("user@example.com"); // true
 *
 * @example
 * // Invalid emails
 * isValidEmail("invalid-email"); // false
 *
 * @note Uses RFC 5322 compliant regex pattern for email validation.
 *
 * @complexity Time: O(n), Space: O(1)
 */
export function isValidEmail(email: string): boolean {
  if (typeof email !== 'string') {
    throw new TypeError(`email must be a string, got ${typeof email}`);
  }

  // Basic format check with RFC 5322 compliance
  const emailRegex =
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  if (!emailRegex.test(email)) {
    return false;
  }

  // Additional checks for invalid patterns
  if (email.includes('..') || email.startsWith('.') || email.endsWith('.')) {
    return false;
  }

  const [localPart, domain] = email.split('@');

  // Check for invalid domain patterns
  if (
    domain.includes('..') ||
    domain.startsWith('.') ||
    domain.endsWith('.') ||
    domain.startsWith('-') ||
    domain.endsWith('-')
  ) {
    return false;
  }

  // Domain must have at least one dot (TLD requirement)
  if (!domain.includes('.')) {
    return false;
  }

  return true;
}
