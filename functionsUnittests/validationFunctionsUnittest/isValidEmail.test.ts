import { isValidEmail } from '../../validationFunctions/isValidEmail';

/**
 * Unit tests for the isValidEmail function.
 */
describe('isValidEmail', () => {
  // Test case 1: Valid email addresses
  it('1. should return true for valid email addresses', () => {
    // Arrange & Act & Assert
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
    expect(isValidEmail('user+tag@example.org')).toBe(true);
    expect(isValidEmail('123@test.com')).toBe(true);
    expect(isValidEmail('a@b.co')).toBe(true);
  });

  // Test case 2: Invalid email addresses
  it('2. should return false for invalid email addresses', () => {
    // Arrange & Act & Assert
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('test..test@example.com')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
    expect(isValidEmail('test@com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  // Test case 3: Edge cases
  it('3. should handle edge cases correctly', () => {
    // Arrange & Act & Assert
    expect(isValidEmail('a@b.c')).toBe(true); // Minimum valid email
    expect(isValidEmail('test@sub.domain.com')).toBe(true); // Subdomain
    expect(isValidEmail('user-name@example-domain.com')).toBe(true); // Hyphens
    expect(isValidEmail('test@example.123')).toBe(true); // Numeric TLD
  });

  // Test case 4: TypeError for invalid input type
  it('4. should throw TypeError for non-string input', () => {
    // Arrange
    const invalidInputs = [123, null, undefined, [], {}, true];
    const expectedMessage = 'email must be a string, got';

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() => isValidEmail(input as any)).toThrow(TypeError);
      expect(() => isValidEmail(input as any)).toThrow(expectedMessage);
    });
  });

  // Test case 5: Special characters and formats
  it('5. should handle special characters correctly', () => {
    // Arrange & Act & Assert
    expect(isValidEmail('test.email+tag@example.com')).toBe(true);
    expect(isValidEmail('user_name@domain.com')).toBe(true);
    expect(isValidEmail('test-email@example-domain.com')).toBe(true);
    expect(isValidEmail('test@domain-with-hyphens.com')).toBe(true);

    // Invalid special character usage
    expect(isValidEmail('test..email@example.com')).toBe(false);
    expect(isValidEmail('test@domain..com')).toBe(false);
    expect(isValidEmail('test@domain-.com')).toBe(false);
  });

  // Test case 6: Performance with long emails
  it('6. should handle long email addresses efficiently', () => {
    // Arrange
    const longLocal = 'a'.repeat(64); // Maximum local part length
    const longDomain = 'b'.repeat(60) + '.com';
    const longEmail = `${longLocal}@${longDomain}`;

    // Act
    const startTime = performance.now();
    const result = isValidEmail(longEmail);
    const endTime = performance.now();

    // Assert
    expect(result).toBe(true);
    expect(endTime - startTime).toBeLessThan(10); // Should complete quickly
  });
});
