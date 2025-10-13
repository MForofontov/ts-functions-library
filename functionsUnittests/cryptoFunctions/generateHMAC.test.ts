import { generateHMAC } from '../../cryptoFunctions/generateHMAC';

/**
 * Unit tests for the generateHMAC function.
 */
describe('generateHMAC', () => {
  const testKey = 'secret-key';
  const testData = 'message to authenticate';

  // Test case 1: Generate HMAC with SHA-256
  it('1. should generate HMAC with SHA-256', () => {
    const result = generateHMAC(testData, testKey, 'sha256');
    expect(typeof result).toBe('string');
    expect(result.length).toBe(64); // SHA-256 = 64 hex chars
  });

  // Test case 2: Generate HMAC with SHA-512
  it('2. should generate HMAC with SHA-512', () => {
    const result = generateHMAC(testData, testKey, 'sha512');
    expect(typeof result).toBe('string');
    expect(result.length).toBe(128); // SHA-512 = 128 hex chars
  });

  // Test case 3: Same input produces same HMAC
  it('3. should produce same HMAC for same inputs', () => {
    const result1 = generateHMAC(testData, testKey, 'sha256');
    const result2 = generateHMAC(testData, testKey, 'sha256');
    expect(result1).toBe(result2);
  });

  // Test case 4: Different data produces different HMAC
  it('4. should produce different HMAC for different data', () => {
    const result1 = generateHMAC('data1', testKey, 'sha256');
    const result2 = generateHMAC('data2', testKey, 'sha256');
    expect(result1).not.toBe(result2);
  });

  // Test case 5: Different keys produce different HMAC
  it('5. should produce different HMAC for different keys', () => {
    const result1 = generateHMAC(testData, 'key1', 'sha256');
    const result2 = generateHMAC(testData, 'key2', 'sha256');
    expect(result1).not.toBe(result2);
  });

  // Test case 6: Generate HMAC for empty string
  it('6. should generate HMAC for empty string', () => {
    const result = generateHMAC('', testKey, 'sha256');
    expect(typeof result).toBe('string');
    expect(result.length).toBe(64);
  });

  // Test case 7: Generate HMAC with Buffer data
  it('7. should generate HMAC with Buffer data', () => {
    const bufferData = Buffer.from(testData);
    const result = generateHMAC(bufferData, testKey, 'sha256');
    expect(typeof result).toBe('string');
    expect(result.length).toBe(64);
  });

  // Test case 8: HMAC is case sensitive
  it('8. should be case sensitive for data', () => {
    const result1 = generateHMAC('Hello', testKey, 'sha256');
    const result2 = generateHMAC('hello', testKey, 'sha256');
    expect(result1).not.toBe(result2);
  });

  // Test case 9: HMAC with special characters
  it('9. should generate HMAC with special characters', () => {
    const specialData = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const result = generateHMAC(specialData, testKey, 'sha256');
    expect(typeof result).toBe('string');
    expect(result.length).toBe(64);
  });

  // Test case 10: HMAC with Unicode characters
  it('10. should generate HMAC with Unicode characters', () => {
    const unicodeData = '你好世界 🌍';
    const result = generateHMAC(unicodeData, testKey, 'sha256');
    expect(typeof result).toBe('string');
    expect(result.length).toBe(64);
  });

  // Test case 11: HMAC returns lowercase hex
  it('11. should return lowercase hexadecimal', () => {
    const result = generateHMAC(testData, testKey, 'sha256');
    expect(result).toBe(result.toLowerCase());
    expect(result).not.toMatch(/[A-F]/);
  });

  // Test case 12: HMAC with long data
  it('12. should generate HMAC for long data', () => {
    const longData = 'A'.repeat(10000);
    const result = generateHMAC(longData, testKey, 'sha256');
    expect(typeof result).toBe('string');
    expect(result.length).toBe(64);
  });

  // Test case 13: HMAC with newlines
  it('13. should generate HMAC for data with newlines', () => {
    const multilineData = 'line1\nline2\nline3';
    const result = generateHMAC(multilineData, testKey, 'sha256');
    expect(typeof result).toBe('string');
    expect(result.length).toBe(64);
  });

  // Test case 14: Known HMAC test vector (SHA-256)
  it('14. should generate correct HMAC for known test vector', () => {
    const data = 'The quick brown fox jumps over the lazy dog';
    const key = 'key';
    const result = generateHMAC(data, key, 'sha256');
    expect(result).toBe(
      'f7bc83f430538424b13298e6aa6fb143ef4d59a14946175997479dbc2d1a3cd8',
    );
  });

  // Test case 15: SHA-512 produces longer HMAC than SHA-256
  it('15. should produce longer HMAC with SHA-512', () => {
    const result256 = generateHMAC(testData, testKey, 'sha256');
    const result512 = generateHMAC(testData, testKey, 'sha512');
    expect(result512.length).toBeGreaterThan(result256.length);
    expect(result512.length).toBe(128);
    expect(result256.length).toBe(64);
  });

  // Test case 16: Throw error for null data
  it('16. should throw TypeError when data is null', () => {
    expect(() =>
      generateHMAC(null as unknown as string, testKey, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      generateHMAC(null as unknown as string, testKey, 'sha256'),
    ).toThrow('data must be a string or Buffer');
  });

  // Test case 17: Throw error for undefined data
  it('17. should throw TypeError when data is undefined', () => {
    expect(() =>
      generateHMAC(undefined as unknown as string, testKey, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      generateHMAC(undefined as unknown as string, testKey, 'sha256'),
    ).toThrow('data must be a string or Buffer');
  });

  // Test case 18: Throw error for null secret
  it('18. should throw TypeError when secret is null', () => {
    expect(() =>
      generateHMAC(testData, null as unknown as string, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      generateHMAC(testData, null as unknown as string, 'sha256'),
    ).toThrow('secret must be a string');
  });

  // Test case 19: Throw error for undefined secret
  it('19. should throw TypeError when secret is undefined', () => {
    expect(() =>
      generateHMAC(testData, undefined as unknown as string, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      generateHMAC(testData, undefined as unknown as string, 'sha256'),
    ).toThrow('secret must be a string');
  });

  // Test case 20: Throw error for invalid algorithm
  it('20. should throw Error for unsupported algorithm', () => {
    const invalidAlgorithm = 'md5';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => generateHMAC(testData, testKey, invalidAlgorithm as any)).toThrow(
      Error,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => generateHMAC(testData, testKey, invalidAlgorithm as any)).toThrow(
      'algorithm must be one of',
    );
  });
});
