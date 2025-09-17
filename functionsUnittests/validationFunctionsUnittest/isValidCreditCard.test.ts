import { isValidCreditCard } from '../../validationFunctions/isValidCreditCard';

/**
 * Unit tests for the isValidCreditCard function.
 */
describe('isValidCreditCard', () => {
  // Test case 1: Valid credit card numbers
  it('1. should return true for valid credit card numbers', () => {
    // Arrange & Act & Assert
    expect(isValidCreditCard('4532015112830366')).toBe(true); // Visa
    expect(isValidCreditCard('5555555555554444')).toBe(true); // Mastercard
    expect(isValidCreditCard('378282246310005')).toBe(true); // American Express
    expect(isValidCreditCard('6011111111111117')).toBe(true); // Discover
    expect(isValidCreditCard('30569309025904')).toBe(true); // Diners Club
  });

  // Test case 2: Invalid credit card numbers
  it('2. should return false for invalid credit card numbers', () => {
    // Arrange & Act & Assert
    expect(isValidCreditCard('1234567890123456')).toBe(false); // Invalid Luhn
    expect(isValidCreditCard('4532015112830367')).toBe(false); // Invalid check digit
    expect(isValidCreditCard('123')).toBe(false); // Too short
    expect(isValidCreditCard('abc123def456ghi7')).toBe(false); // Contains letters
  });

  // Test case 3: Credit card numbers with formatting
  it('3. should handle formatted credit card numbers', () => {
    // Arrange & Act & Assert
    expect(isValidCreditCard('4532-0151-1283-0366')).toBe(true);
    expect(isValidCreditCard('4532 0151 1283 0366')).toBe(true);
    expect(isValidCreditCard('4532 0151-1283 0366')).toBe(true); // Mixed formatting
    expect(isValidCreditCard('5555 5555 5555 4444')).toBe(true);
  });

  // Test case 4: TypeError for invalid input type
  it('4. should throw TypeError for non-string input', () => {
    // Arrange
    const invalidInputs = [123, null, undefined, [], {}, true];
    const expectedMessage = 'cardNumber must be a string, got';

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() => isValidCreditCard(input as unknown as string)).toThrow(
        TypeError,
      );
      expect(() => isValidCreditCard(input as unknown as string)).toThrow(
        expectedMessage,
      );
    });
  });

  // Test case 5: Error for empty card number after cleaning
  it('5. should throw Error for empty card number after removing formatting', () => {
    // Arrange
    const emptyFormatted = '- - - -';
    const spacesOnly = '    ';
    const expectedMessage =
      'cardNumber cannot be empty after removing spaces and dashes';

    // Act & Assert
    expect(() => isValidCreditCard(emptyFormatted)).toThrow(Error);
    expect(() => isValidCreditCard(spacesOnly)).toThrow(Error);
    expect(() => isValidCreditCard(emptyFormatted)).toThrow(expectedMessage);
  });

  // Test case 6: Performance with various card numbers
  it('6. should validate card numbers efficiently', () => {
    // Arrange
    const cardNumbers = [
      '4532015112830366',
      '5555555555554444',
      '378282246310005',
      '1234567890123456',
      '4532-0151-1283-0366',
    ];

    // Act
    const startTime = performance.now();
    const results = cardNumbers.map((card) => isValidCreditCard(card));
    const endTime = performance.now();

    // Assert
    expect(results).toEqual([true, true, true, false, true]);
    expect(endTime - startTime).toBeLessThan(10); // Should complete quickly
  });
});
