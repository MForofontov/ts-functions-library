/**
 * Validates if a password meets strong security criteria.
 *
 * @param password - The password string to validate.
 * @param minLength - Minimum length requirement (default: 8).
 * @param requireUppercase - Require uppercase letters (default: true).
 * @param requireLowercase - Require lowercase letters (default: true).
 * @param requireNumbers - Require numbers (default: true).
 * @param requireSpecialChars - Require special characters (default: true).
 * @returns True if the password is strong, false otherwise.
 *
 * @throws {TypeError} If password is not a string or other parameters are not boolean/number.
 * @throws {Error} If minLength is less than 1.
 *
 * @example
 * // Strong password
 * isPasswordStrong("MyP@ssw0rd123"); // true
 *
 * @example
 * // Weak password
 * isPasswordStrong("password"); // false
 *
 * @example
 * // Custom requirements
 * isPasswordStrong("password123", 8, false, true, true, false); // true
 *
 * @note Special characters include: !@#$%^&*()_+-=[]{}|;:,.<>?
 *
 * @complexity Time: O(n), Space: O(1)
 */
export function isPasswordStrong(
  password: string,
  minLength: number = 8,
  requireUppercase: boolean = true,
  requireLowercase: boolean = true,
  requireNumbers: boolean = true,
  requireSpecialChars: boolean = true,
): boolean {
  if (typeof password !== 'string') {
    throw new TypeError(`password must be a string, got ${typeof password}`);
  }

  if (typeof minLength !== 'number' || isNaN(minLength)) {
    throw new TypeError(`minLength must be a number, got ${typeof minLength}`);
  }

  if (minLength < 1) {
    throw new Error(`minLength must be at least 1, got ${minLength}`);
  }

  if (typeof requireUppercase !== 'boolean') {
    throw new TypeError(
      `requireUppercase must be a boolean, got ${typeof requireUppercase}`,
    );
  }

  if (typeof requireLowercase !== 'boolean') {
    throw new TypeError(
      `requireLowercase must be a boolean, got ${typeof requireLowercase}`,
    );
  }

  if (typeof requireNumbers !== 'boolean') {
    throw new TypeError(
      `requireNumbers must be a boolean, got ${typeof requireNumbers}`,
    );
  }

  if (typeof requireSpecialChars !== 'boolean') {
    throw new TypeError(
      `requireSpecialChars must be a boolean, got ${typeof requireSpecialChars}`,
    );
  }

  // Check length
  if (password.length < minLength) {
    return false;
  }

  // Check uppercase requirement
  if (requireUppercase && !/[A-Z]/.test(password)) {
    return false;
  }

  // Check lowercase requirement
  if (requireLowercase && !/[a-z]/.test(password)) {
    return false;
  }

  // Check numbers requirement
  if (requireNumbers && !/\d/.test(password)) {
    return false;
  }

  // Check special characters requirement
  if (requireSpecialChars && !/[!@#$%^&*()_+\-=[\]{}|;:,.<>?]/.test(password)) {
    return false;
  }

  return true;
}
