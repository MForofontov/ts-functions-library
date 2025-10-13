import { generateHMAC } from '../../cryptoFunctions/generateHMAC';
import { verifyHMAC } from '../../cryptoFunctions/verifyHMAC';

/**
 * Unit tests for the verifyHMAC function.
 */
describe('verifyHMAC', () => {
  const testKey = 'secret-key';
  const testData = 'message to authenticate';

  // Test case 1: Verify valid HMAC with SHA-256
  it('1. should return true for valid HMAC with SHA-256', () => {
    const hmac = generateHMAC(testData, testKey, 'sha256');
    const result = verifyHMAC(testData, testKey, hmac, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 2: Verify valid HMAC with SHA-512
  it('2. should return true for valid HMAC with SHA-512', () => {
    const hmac = generateHMAC(testData, testKey, 'sha512');
    const result = verifyHMAC(testData, testKey, hmac, 'sha512');
    expect(result).toBe(true);
  });

  // Test case 3: Return false for invalid HMAC
  it('3. should return false for invalid HMAC', () => {
    const invalidHmac =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    const result = verifyHMAC(testData, testKey, invalidHmac, 'sha256');
    expect(result).toBe(false);
  });

  // Test case 4: Return false for wrong key
  it('4. should return false when key is wrong', () => {
    const hmac = generateHMAC(testData, 'key1', 'sha256');
    const result = verifyHMAC(testData, 'key2', hmac, 'sha256');
    expect(result).toBe(false);
  });

  // Test case 5: Return false for wrong data
  it('5. should return false when data is different', () => {
    const hmac = generateHMAC('data1', testKey, 'sha256');
    const result = verifyHMAC('data2', testKey, hmac, 'sha256');
    expect(result).toBe(false);
  });

  // Test case 6: Verify HMAC with empty string
  it('6. should verify HMAC for empty string', () => {
    const hmac = generateHMAC('', testKey, 'sha256');
    const result = verifyHMAC('', testKey, hmac, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 7: Verify HMAC with Buffer data
  it('7. should verify HMAC with Buffer data', () => {
    const bufferData = Buffer.from(testData);
    const hmac = generateHMAC(bufferData, testKey, 'sha256');
    const result = verifyHMAC(bufferData, testKey, hmac, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 8: Verify case-sensitive data
  it('8. should be case sensitive for data', () => {
    const hmac = generateHMAC('Hello', testKey, 'sha256');
    const result = verifyHMAC('hello', testKey, hmac, 'sha256');
    expect(result).toBe(false);
  });

  // Test case 9: Verify with special characters
  it('9. should verify HMAC with special characters', () => {
    const specialData = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const hmac = generateHMAC(specialData, testKey, 'sha256');
    const result = verifyHMAC(specialData, testKey, hmac, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 10: Verify with Unicode characters
  it('10. should verify HMAC with Unicode characters', () => {
    const unicodeData = '你好世界 🌍';
    const hmac = generateHMAC(unicodeData, testKey, 'sha256');
    const result = verifyHMAC(unicodeData, testKey, hmac, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 11: Handle uppercase HMAC input
  it('11. should handle uppercase HMAC input', () => {
    const hmac = generateHMAC(testData, testKey, 'sha256');
    const uppercaseHmac = hmac.toUpperCase();
    const result = verifyHMAC(testData, testKey, uppercaseHmac, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 12: Verify with long data
  it('12. should verify HMAC for long data', () => {
    const longData = 'A'.repeat(10000);
    const hmac = generateHMAC(longData, testKey, 'sha256');
    const result = verifyHMAC(longData, testKey, hmac, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 13: Verify with newlines
  it('13. should verify HMAC for data with newlines', () => {
    const multilineData = 'line1\nline2\nline3';
    const hmac = generateHMAC(multilineData, testKey, 'sha256');
    const result = verifyHMAC(multilineData, testKey, hmac, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 14: Throw error for wrong HMAC length
  it('14. should throw error for wrong HMAC length', () => {
    const shortHmac = 'tooshort';
    expect(() => verifyHMAC(testData, testKey, shortHmac, 'sha256')).toThrow(
      Error,
    );
    expect(() => verifyHMAC(testData, testKey, shortHmac, 'sha256')).toThrow(
      'hmac length for',
    );
  });

  // Test case 15: Timing-safe comparison (should not throw)
  it('15. should use timing-safe comparison without errors', () => {
    const hmac = generateHMAC(testData, testKey, 'sha256');
    expect(() => verifyHMAC(testData, testKey, hmac, 'sha256')).not.toThrow();
  });

  // Test case 16: Throw error for null data
  it('16. should throw TypeError when data is null', () => {
    const hmac = generateHMAC(testData, testKey, 'sha256');
    expect(() =>
      verifyHMAC(null as unknown as string, testKey, hmac, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      verifyHMAC(null as unknown as string, testKey, hmac, 'sha256'),
    ).toThrow('data must be a string or Buffer');
  });

  // Test case 17: Throw error for undefined data
  it('17. should throw TypeError when data is undefined', () => {
    const hmac = generateHMAC(testData, testKey, 'sha256');
    expect(() =>
      verifyHMAC(undefined as unknown as string, testKey, hmac, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      verifyHMAC(undefined as unknown as string, testKey, hmac, 'sha256'),
    ).toThrow('data must be a string or Buffer');
  });

  // Test case 18: Throw error for null secret
  it('18. should throw TypeError when secret is null', () => {
    const hmac = generateHMAC(testData, testKey, 'sha256');
    expect(() =>
      verifyHMAC(testData, null as unknown as string, hmac, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      verifyHMAC(testData, null as unknown as string, hmac, 'sha256'),
    ).toThrow('secret must be a string');
  });

  // Test case 19: Throw error for undefined secret
  it('19. should throw TypeError when secret is undefined', () => {
    const hmac = generateHMAC(testData, testKey, 'sha256');
    expect(() =>
      verifyHMAC(testData, undefined as unknown as string, hmac, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      verifyHMAC(testData, undefined as unknown as string, hmac, 'sha256'),
    ).toThrow('secret must be a string');
  });

  // Test case 20: Throw error for null hmac
  it('20. should throw TypeError when hmac is null', () => {
    expect(() =>
      verifyHMAC(testData, testKey, null as unknown as string, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      verifyHMAC(testData, testKey, null as unknown as string, 'sha256'),
    ).toThrow('hmac must be a string');
  });
});
