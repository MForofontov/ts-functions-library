import { isValidPhoneNumber } from '../../validationFunctions/isValidPhoneNumber';

/**
 * Unit tests for the isValidPhoneNumber function.
 */
describe('isValidPhoneNumber', () => {
  // Test case 1: Valid phone numbers with default format
  it('1. should return true for valid phone numbers', () => {
    // Arrange & Act & Assert
    expect(isValidPhoneNumber('+1234567890')).toBe(true);
    expect(isValidPhoneNumber('+44 20 7946 0958')).toBe(true);
    expect(isValidPhoneNumber('+33 1 42 86 83 26')).toBe(true);
    expect(isValidPhoneNumber('+86 138 0013 8000')).toBe(true);
    expect(isValidPhoneNumber('+49 30 12345678')).toBe(true);
  });

  // Test case 2: Invalid phone numbers
  it('2. should return false for invalid phone numbers', () => {
    // Arrange & Act & Assert
    expect(isValidPhoneNumber('123')).toBe(false); // Too short
    expect(isValidPhoneNumber('abc123def')).toBe(false); // Contains letters
    expect(isValidPhoneNumber('123-456-7890')).toBe(false); // Wrong format
    expect(isValidPhoneNumber('')).toBe(false); // Empty string
    expect(isValidPhoneNumber('1234567890123456789')).toBe(false); // Too long
  });

  // Test case 3: Edge cases with different formats
  it('3. should handle edge cases correctly', () => {
    // Arrange & Act & Assert
    expect(isValidPhoneNumber('+12345678901')).toBe(true); // 11 digits with country code
    expect(isValidPhoneNumber('+1 234 567 8901')).toBe(true); // With spaces
    expect(isValidPhoneNumber('+1234567')).toBe(true); // 7 digits (minimum)
    expect(isValidPhoneNumber('+123456789012345')).toBe(true); // 15 digits (maximum)
  });

  // Test case 4: TypeError for invalid input type
  it('4. should throw TypeError for non-string input', () => {
    // Arrange
    const invalidInputs = [123, null, undefined, [], {}, true];
    const expectedMessage = 'phoneNumber must be a string, got';

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() => isValidPhoneNumber(input as unknown as string)).toThrow(
        TypeError,
      );
      expect(() => isValidPhoneNumber(input as unknown as string)).toThrow(
        expectedMessage,
      );
    });
  });

  // Test case 5: US format validation
  it('5. should validate US format when specified', () => {
    // Arrange & Act & Assert
    expect(isValidPhoneNumber('(555) 123-4567', 'us')).toBe(true);
    expect(isValidPhoneNumber('555.123.4567', 'us')).toBe(true);
    expect(isValidPhoneNumber('555-123-4567', 'us')).toBe(true);
    expect(isValidPhoneNumber('+1 555 123 4567', 'us')).toBe(true);

    // Invalid for US format
    expect(isValidPhoneNumber('+44 20 7946 0958', 'us')).toBe(false);
    expect(isValidPhoneNumber('123', 'us')).toBe(false);
  });

  // Test case 6: Performance with various inputs
  it('6. should handle validation efficiently', () => {
    // Arrange
    const phoneNumbers = [
      '+1234567890',
      '+44 20 7946 0958',
      '+33 1 42 86 83 26',
      'invalid-phone',
      '+12345', // Too short for international format
    ];

    // Act
    const startTime = performance.now();
    const results = phoneNumbers.map((phone) => isValidPhoneNumber(phone));
    const endTime = performance.now();

    // Assert
    expect(results).toEqual([true, true, true, false, false]);
    expect(endTime - startTime).toBeLessThan(10); // Should complete quickly
  });
});
