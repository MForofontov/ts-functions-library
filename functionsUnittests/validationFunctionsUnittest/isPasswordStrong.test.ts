import { isPasswordStrong } from '../../validationFunctions/isPasswordStrong';

/**
 * Unit tests for the isPasswordStrong function.
 */
describe('isPasswordStrong', () => {
  // Test case 1: Strong passwords with default criteria
  it('1. should return true for strong passwords', () => {
    // Arrange & Act & Assert
    expect(isPasswordStrong('MyP@ssw0rd123')).toBe(true);
    expect(isPasswordStrong('Str0ng!Pass')).toBe(true);
    expect(isPasswordStrong('Test123!')).toBe(true);
    expect(isPasswordStrong('Complex1!')).toBe(true);
  });

  // Test case 2: Weak passwords with default criteria
  it('2. should return false for weak passwords', () => {
    // Arrange & Act & Assert
    expect(isPasswordStrong('password')).toBe(false); // No uppercase, numbers, special chars
    expect(isPasswordStrong('PASSWORD')).toBe(false); // No lowercase, numbers, special chars
    expect(isPasswordStrong('Password')).toBe(false); // No numbers, special chars
    expect(isPasswordStrong('Password123')).toBe(false); // No special chars
    expect(isPasswordStrong('Pass@')).toBe(false); // Too short
  });

  // Test case 3: Custom requirements
  it('3. should handle custom requirements correctly', () => {
    // Arrange & Act & Assert
    expect(isPasswordStrong('password123', 8, false, true, true, false)).toBe(
      true,
    );
    expect(isPasswordStrong('PASSWORD123', 8, true, false, true, false)).toBe(
      true,
    );
    expect(isPasswordStrong('passwordABC', 8, true, true, false, false)).toBe(
      true,
    );
    expect(isPasswordStrong('password@#$', 8, false, true, false, true)).toBe(
      true,
    );
  });

  // Test case 4: TypeError for invalid input types
  it('4. should throw TypeError for invalid input types', () => {
    // Arrange & Act & Assert
    expect(() => isPasswordStrong(123 as unknown as string)).toThrow(TypeError);
    expect(() =>
      isPasswordStrong('password', 'eight' as unknown as number),
    ).toThrow(TypeError);
    expect(() =>
      isPasswordStrong('password', 8, 'true' as unknown as boolean),
    ).toThrow(TypeError);

    const expectedPasswordMessage = 'password must be a string, got number';
    const expectedLengthMessage = 'minLength must be a number, got string';

    expect(() => isPasswordStrong(123 as unknown as string)).toThrow(
      expectedPasswordMessage,
    );
    expect(() =>
      isPasswordStrong('password', 'eight' as unknown as number),
    ).toThrow(expectedLengthMessage);
  });

  // Test case 5: Value validation errors
  it('5. should throw Error for invalid parameter values', () => {
    // Arrange & Act & Assert
    expect(() => isPasswordStrong('password', 0)).toThrow(Error);
    expect(() => isPasswordStrong('password', -1)).toThrow(Error);
    expect(() => isPasswordStrong('password', Number.NaN)).toThrow(TypeError);

    const expectedMessage = 'minLength must be at least 1';
    expect(() => isPasswordStrong('password', 0)).toThrow(expectedMessage);
  });

  // Test case 6: Boundary conditions and performance
  it('6. should handle boundary conditions efficiently', () => {
    // Arrange
    const shortPassword = 'A1@';
    const longPassword =
      'A'.repeat(25) + 'a'.repeat(25) + '1'.repeat(25) + '@'.repeat(25);

    // Act & Assert
    expect(isPasswordStrong(shortPassword, 3, false, false, false, false)).toBe(
      true,
    );
    expect(isPasswordStrong('A', 1, true, false, false, false)).toBe(true);

    const startTime = performance.now();
    expect(isPasswordStrong(longPassword)).toBe(true);
    const endTime = performance.now();

    expect(endTime - startTime).toBeLessThan(10); // Should complete quickly
  });
});
