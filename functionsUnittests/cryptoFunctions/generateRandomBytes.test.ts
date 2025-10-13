import { generateRandomBytes } from '../../cryptoFunctions/generateRandomBytes';

/**
 * Unit tests for the generateRandomBytes function.
 */
describe('generateRandomBytes', () => {
  // Test case 1: Generate random bytes with 32 length
  it('1. should generate 32 bytes', () => {
    const result = generateRandomBytes(32);
    expect(result).toBeInstanceOf(Buffer);
    expect(result.length).toBe(32);
  });

  // Test case 2: Generate specific number of bytes
  it('2. should generate specified number of bytes', () => {
    const result = generateRandomBytes(16);
    expect(result).toBeInstanceOf(Buffer);
    expect(result.length).toBe(16);
  });

  // Test case 3: Generate 64 bytes
  it('3. should generate 64 bytes when specified', () => {
    const result = generateRandomBytes(64);
    expect(result).toBeInstanceOf(Buffer);
    expect(result.length).toBe(64);
  });

  // Test case 4: Generate 1 byte
  it('4. should generate 1 byte minimum', () => {
    const result = generateRandomBytes(1);
    expect(result).toBeInstanceOf(Buffer);
    expect(result.length).toBe(1);
  });

  // Test case 5: Generate large number of bytes
  it('5. should generate large number of bytes (1024)', () => {
    const result = generateRandomBytes(1024);
    expect(result).toBeInstanceOf(Buffer);
    expect(result.length).toBe(1024);
  });

  // Test case 6: Bytes should be random (not all zeros)
  it('6. should generate non-zero random bytes', () => {
    const result = generateRandomBytes(32);
    const allZeros = Buffer.alloc(32, 0);
    expect(result.equals(allZeros)).toBe(false);
  });

  // Test case 7: Each call should produce different bytes
  it('7. should produce different bytes on each call', () => {
    const result1 = generateRandomBytes(32);
    const result2 = generateRandomBytes(32);
    expect(result1.equals(result2)).toBe(false);
  });

  // Test case 8: Should return Buffer type
  it('8. should return Buffer instance', () => {
    const result = generateRandomBytes(16);
    expect(Buffer.isBuffer(result)).toBe(true);
  });

  // Test case 9: Can convert to hex string
  it('9. should be convertible to hex string', () => {
    const result = generateRandomBytes(16);
    const hexString = result.toString('hex');
    expect(hexString).toHaveLength(32); // 16 bytes = 32 hex chars
    expect(hexString).toMatch(/^[a-f0-9]+$/);
  });

  // Test case 10: Can convert to base64 string
  it('10. should be convertible to base64 string', () => {
    const result = generateRandomBytes(16);
    const base64String = result.toString('base64');
    expect(base64String.length).toBeGreaterThan(0);
  });

  // Test case 11: Generate 128 bytes
  it('11. should generate 128 bytes when specified', () => {
    const result = generateRandomBytes(128);
    expect(result.length).toBe(128);
  });

  // Test case 12: Generate 256 bytes
  it('12. should generate 256 bytes when specified', () => {
    const result = generateRandomBytes(256);
    expect(result.length).toBe(256);
  });

  // Test case 13: Bytes should have good distribution
  it('13. should have reasonable byte value distribution', () => {
    const result = generateRandomBytes(1000);
    const uniqueValues = new Set(result);
    // Should have at least 200 unique values out of 256 possible
    expect(uniqueValues.size).toBeGreaterThan(200);
  });

  // Test case 14: Generate 8 bytes
  it('14. should generate 8 bytes when specified', () => {
    const result = generateRandomBytes(8);
    expect(result.length).toBe(8);
  });

  // Test case 15: Multiple calls maintain randomness
  it('15. should maintain randomness across multiple calls', () => {
    const results = Array.from({ length: 10 }, () => generateRandomBytes(16));
    const uniqueResults = new Set(results.map((b) => b.toString('hex')));
    expect(uniqueResults.size).toBe(10); // All should be unique
  });

  // Test case 16: Throw error for negative length
  it('16. should throw Error for negative length', () => {
    expect(() => generateRandomBytes(-1)).toThrow(Error);
    expect(() => generateRandomBytes(-1)).toThrow(
      'length must be a positive integer',
    );
  });

  // Test case 17: Throw error for zero length
  it('17. should throw Error for zero length', () => {
    expect(() => generateRandomBytes(0)).toThrow(Error);
    expect(() => generateRandomBytes(0)).toThrow(
      'length must be a positive integer',
    );
  });

  // Test case 18: Throw error for non-integer length
  it('18. should throw Error for non-integer length', () => {
    expect(() => generateRandomBytes(3.14)).toThrow(Error);
    expect(() => generateRandomBytes(3.14)).toThrow(
      'length must be a positive integer',
    );
  });

  // Test case 19: Throw error for NaN
  it('19. should throw TypeError for NaN', () => {
    expect(() => generateRandomBytes(NaN)).toThrow(Error);
    expect(() => generateRandomBytes(NaN)).toThrow(
      'length must be a valid number',
    );
  });

  // Test case 20: Throw error for non-number type
  it('20. should throw TypeError for non-number type', () => {
    expect(() => generateRandomBytes('16' as unknown as number)).toThrow(
      TypeError,
    );
    expect(() => generateRandomBytes('16' as unknown as number)).toThrow(
      'length must be a number',
    );
  });
});
