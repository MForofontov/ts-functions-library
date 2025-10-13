import { decryptAES256 } from '../../cryptoFunctions/decryptAES256';
import { encryptAES256 } from '../../cryptoFunctions/encryptAES256';

/**
 * Unit tests for the decryptAES256 function.
 */
describe('decryptAES256', () => {
  const testPassword = 'test-password-123';
  const testData = 'Hello, World!';

  // Test case 1: Decrypt encrypted data
  it('1. should decrypt encrypted data correctly', () => {
    const encrypted = encryptAES256(testData, testPassword);
    const decrypted = decryptAES256(encrypted, testPassword);
    expect(decrypted).toBe(testData);
  });

  // Test case 2: Decrypt single character
  it('2. should decrypt single character', () => {
    const encrypted = encryptAES256('a', testPassword);
    const decrypted = decryptAES256(encrypted, testPassword);
    expect(decrypted).toBe('a');
  });

  // Test case 3: Decrypt long string
  it('3. should decrypt long string', () => {
    const longData = 'A'.repeat(10000);
    const encrypted = encryptAES256(longData, testPassword);
    const decrypted = decryptAES256(encrypted, testPassword);
    expect(decrypted).toBe(longData);
  });

  // Test case 4: Decrypt with special characters
  it('4. should decrypt string with special characters', () => {
    const specialData = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const encrypted = encryptAES256(specialData, testPassword);
    const decrypted = decryptAES256(encrypted, testPassword);
    expect(decrypted).toBe(specialData);
  });

  // Test case 5: Decrypt with Unicode characters
  it('5. should decrypt string with Unicode characters', () => {
    const unicodeData = '你好世界 🌍';
    const encrypted = encryptAES256(unicodeData, testPassword);
    const decrypted = decryptAES256(encrypted, testPassword);
    expect(decrypted).toBe(unicodeData);
  });

  // Test case 6: Decrypt with newlines
  it('6. should decrypt string with newlines', () => {
    const multilineData = 'line1\nline2\nline3';
    const encrypted = encryptAES256(multilineData, testPassword);
    const decrypted = decryptAES256(encrypted, testPassword);
    expect(decrypted).toBe(multilineData);
  });

  // Test case 7: Wrong password fails decryption
  it('7. should throw error with wrong password', () => {
    const encrypted = encryptAES256(testData, 'password1');
    expect(() => decryptAES256(encrypted, 'password2')).toThrow();
  });

  // Test case 8: Tampered IV fails decryption
  it('8. should throw error when IV is tampered', () => {
    const encrypted = encryptAES256(testData, testPassword);
    const parts = encrypted.split(':');
    const tampered = 'aaaa' + parts[0].slice(4) + ':' + parts[1] + ':' + parts[2];
    expect(() => decryptAES256(tampered, testPassword)).toThrow();
  });

  // Test case 9: Tampered ciphertext fails decryption
  it('9. should throw error when ciphertext is tampered', () => {
    const encrypted = encryptAES256(testData, testPassword);
    const parts = encrypted.split(':');
    const tampered = parts[0] + ':' + 'bbbb' + parts[1].slice(4) + ':' + parts[2];
    expect(() => decryptAES256(tampered, testPassword)).toThrow();
  });

  // Test case 10: Tampered auth tag fails decryption
  it('10. should throw error when auth tag is tampered', () => {
    const encrypted = encryptAES256(testData, testPassword);
    const parts = encrypted.split(':');
    const tampered = parts[0] + ':' + parts[1] + ':' + 'cccc' + parts[2].slice(4);
    expect(() => decryptAES256(tampered, testPassword)).toThrow();
  });

  // Test case 11: Decrypt with numeric string
  it('11. should decrypt numeric string', () => {
    const numericData = '1234567890';
    const encrypted = encryptAES256(numericData, testPassword);
    const decrypted = decryptAES256(encrypted, testPassword);
    expect(decrypted).toBe(numericData);
  });

  // Test case 12: Decrypt with short password
  it('12. should decrypt with short password', () => {
    const shortPassword = 'pw';
    const encrypted = encryptAES256(testData, shortPassword);
    const decrypted = decryptAES256(encrypted, shortPassword);
    expect(decrypted).toBe(testData);
  });

  // Test case 13: Decrypt with long password
  it('13. should decrypt with long password', () => {
    const longPassword = 'a'.repeat(100);
    const encrypted = encryptAES256(testData, longPassword);
    const decrypted = decryptAES256(encrypted, longPassword);
    expect(decrypted).toBe(testData);
  });

  // Test case 14: Multiple encrypt/decrypt cycles
  it('14. should handle multiple encrypt/decrypt cycles', () => {
    let data = testData;
    for (let i = 0; i < 5; i++) {
      const encrypted = encryptAES256(data, testPassword);
      const decrypted = decryptAES256(encrypted, testPassword);
      expect(decrypted).toBe(data);
      data = decrypted;
    }
  });

  // Test case 15: Decrypt preserves exact data
  it('15. should preserve exact data after decryption', () => {
    const data = 'Test with trailing spaces   ';
    const encrypted = encryptAES256(data, testPassword);
    const decrypted = decryptAES256(encrypted, testPassword);
    expect(decrypted).toBe(data);
    expect(decrypted.length).toBe(data.length);
  });

  // Test case 16: Throw error for null encryptedData
  it('16. should throw TypeError when encryptedData is null', () => {
    expect(() =>
      decryptAES256(null as unknown as string, testPassword),
    ).toThrow(TypeError);
    expect(() =>
      decryptAES256(null as unknown as string, testPassword),
    ).toThrow('encrypted must be a string');
  });

  // Test case 17: Throw error for undefined encryptedData
  it('17. should throw TypeError when encryptedData is undefined', () => {
    expect(() =>
      decryptAES256(undefined as unknown as string, testPassword),
    ).toThrow(TypeError);
    expect(() =>
      decryptAES256(undefined as unknown as string, testPassword),
    ).toThrow('encrypted must be a string');
  });

  // Test case 18: Throw error for null password
  it('18. should throw TypeError when password is null', () => {
    const encrypted = encryptAES256(testData, testPassword);
    expect(() => decryptAES256(encrypted, null as unknown as string)).toThrow(
      TypeError,
    );
    expect(() => decryptAES256(encrypted, null as unknown as string)).toThrow(
      'key must be a string',
    );
  });

  // Test case 19: Throw error for undefined password
  it('19. should throw TypeError when password is undefined', () => {
    const encrypted = encryptAES256(testData, testPassword);
    expect(() =>
      decryptAES256(encrypted, undefined as unknown as string),
    ).toThrow(TypeError);
    expect(() =>
      decryptAES256(encrypted, undefined as unknown as string),
    ).toThrow('key must be a string');
  });

  // Test case 20: Throw error for invalid format
  it('20. should throw Error for invalid encryptedData format', () => {
    expect(() => decryptAES256('invalid-format', testPassword)).toThrow(Error);
    expect(() => decryptAES256('invalid-format', testPassword)).toThrow(
      'invalid encrypted format',
    );
  });
});
