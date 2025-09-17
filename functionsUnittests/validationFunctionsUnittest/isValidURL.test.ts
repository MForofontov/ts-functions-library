import { isValidURL } from '../../validationFunctions/isValidURL';

/**
 * Unit tests for the isValidURL function.
 */
describe('isValidURL', () => {
  // Test case 1: Valid URLs
  it('1. should return true for valid URLs', () => {
    // Arrange & Act & Assert
    expect(isValidURL('https://www.example.com')).toBe(true);
    expect(isValidURL('http://example.com')).toBe(true);
    expect(isValidURL('https://sub.domain.example.com/path?query=value')).toBe(
      true,
    );
    expect(isValidURL('ftp://files.example.com/file.txt', ['ftp'])).toBe(true);
    expect(isValidURL('https://localhost:3000/api/test')).toBe(true);
  });

  // Test case 2: Invalid URLs
  it('2. should return false for invalid URLs', () => {
    // Arrange & Act & Assert
    expect(isValidURL('not-a-url')).toBe(false);
    expect(isValidURL('http://')).toBe(false);
    expect(isValidURL('://example.com')).toBe(false);
    expect(isValidURL('example.com')).toBe(false); // Missing protocol
    expect(isValidURL('')).toBe(false);
    expect(isValidURL('https://example .com')).toBe(false); // Space in domain
  });

  // Test case 3: Edge cases with different protocols
  it('3. should handle different protocols correctly', () => {
    // Arrange & Act & Assert
    expect(isValidURL('https://example.com')).toBe(true);
    expect(isValidURL('http://example.com')).toBe(true);
    expect(isValidURL('ftp://example.com', ['ftp'])).toBe(true);
    expect(isValidURL('mailto:test@example.com', ['mailto'])).toBe(true);
    expect(isValidURL('file:///path/to/file', ['file'])).toBe(true);
    expect(isValidURL('ws://websocket.example.com', ['ws'])).toBe(true);
  });

  // Test case 4: TypeError for invalid input type
  it('4. should throw TypeError for non-string input', () => {
    // Arrange
    const invalidInputs = [123, null, undefined, [], {}, true];
    const expectedMessage = 'url must be a string, got';

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() => isValidURL(input as unknown as string)).toThrow(TypeError);
      expect(() => isValidURL(input as unknown as string)).toThrow(
        expectedMessage,
      );
    });
  });

  // Test case 5: Complex URLs with parameters and fragments
  it('5. should handle complex URLs correctly', () => {
    // Arrange & Act & Assert
    expect(
      isValidURL(
        'https://example.com/path/to/resource?param1=value1&param2=value2#section',
      ),
    ).toBe(true);
    expect(
      isValidURL(
        'https://api.example.com/v1/users/123?include=profile,settings',
      ),
    ).toBe(true);
    expect(isValidURL('https://example.com:8080/secure/path')).toBe(true);
    expect(isValidURL('https://user:pass@example.com/private')).toBe(true);
  });

  // Test case 6: Performance with long URLs
  it('6. should handle long URLs efficiently', () => {
    // Arrange
    const longPath = 'path/'.repeat(100);
    const longURL = `https://example.com/${longPath}?query=value`;

    // Act
    const startTime = performance.now();
    const result = isValidURL(longURL);
    const endTime = performance.now();

    // Assert
    expect(result).toBe(true);
    expect(endTime - startTime).toBeLessThan(10); // Should complete quickly
  });
});
