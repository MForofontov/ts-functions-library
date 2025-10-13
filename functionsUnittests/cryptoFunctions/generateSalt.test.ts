import { generateSalt } from '../../cryptoFunctions/generateSalt';

/**
 * Unit tests for the generateSalt function.
 */
describe('generateSalt', () => {
  // Test case 1: Generate salt with 32 bytes
  it('1. should generate 32-byte salt', () => {
    const result = generateSalt(32);
    expect(typeof result).toBe('string');
    expect(result.length).toBe(64); // 32 bytes = 64 hex chars
  });

  // Test case 2: Generate salt with 16 bytes
  it('2. should generate 16-byte salt', () => {
    const result = generateSalt(16);
    expect(typeof result).toBe('string');
    expect(result.length).toBe(32); // 16 bytes = 32 hex chars
  });

  // Test case 3: Generate salt with 64 bytes
  it('3. should generate 64-byte salt', () => {
    const result = generateSalt(64);
    expect(typeof result).toBe('string');
    expect(result.length).toBe(128); // 64 bytes = 128 hex chars
  });

  // Test case 4: Return hex string format
  it('4. should return hexadecimal string', () => {
    const result = generateSalt(16);
    expect(result).toMatch(/^[a-f0-9]+$/);
  });

  // Test case 5: Generate unique salts on each call
  it('5. should generate different salts on each call', () => {
    const salt1 = generateSalt(32);
    const salt2 = generateSalt(32);
    expect(salt1).not.toBe(salt2);
  });

  // Test case 6: Generate salt with 1 byte minimum
  it('6. should generate 1-byte salt', () => {
    const result = generateSalt(1);
    expect(result.length).toBe(2); // 1 byte = 2 hex chars
  });

  // Test case 7: Generate salt with 128 bytes
  it('7. should generate 128-byte salt', () => {
    const result = generateSalt(128);
    expect(result.length).toBe(256); // 128 bytes = 256 hex chars
  });

  // Test case 8: Salt should be lowercase hex
  it('8. should return lowercase hexadecimal', () => {
    const result = generateSalt(16);
    expect(result).toBe(result.toLowerCase());
    expect(result).not.toMatch(/[A-F]/);
  });

  // Test case 9: Generate multiple salts all unique
  it('9. should generate multiple unique salts', () => {
    const salts = Array.from({ length: 10 }, () => generateSalt(32));
    const uniqueSalts = new Set(salts);
    expect(uniqueSalts.size).toBe(10);
  });

  // Test case 10: Salt should not contain non-hex characters
  it('10. should contain only hexadecimal characters', () => {
    const result = generateSalt(32);
    expect(result).toMatch(/^[0-9a-f]+$/);
  });

  // Test case 11: Generate salt with 8 bytes
  it('11. should generate 8-byte salt', () => {
    const result = generateSalt(8);
    expect(result.length).toBe(16); // 8 bytes = 16 hex chars
  });

  // Test case 12: Generate salt with 256 bytes
  it('12. should generate 256-byte salt', () => {
    const result = generateSalt(256);
    expect(result.length).toBe(512); // 256 bytes = 512 hex chars
  });

  // Test case 13: Salt has good randomness distribution
  it('13. should have good character distribution', () => {
    const result = generateSalt(1000);
    const charCounts = new Map<string, number>();
    for (const char of result) {
      charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }
    // Should have all 16 hex characters
    expect(charCounts.size).toBe(16);
  });

  // Test case 14: Return string type
  it('14. should return string type', () => {
    const result = generateSalt(16);
    expect(typeof result).toBe('string');
  });

  // Test case 15: Length matches bytes * 2
  it('15. should have length equal to bytes times 2', () => {
    const bytes = 24;
    const result = generateSalt(bytes);
    expect(result.length).toBe(bytes * 2);
  });

  // Test case 16: Throw error for negative bytes
  it('16. should throw Error for negative bytes', () => {
    expect(() => generateSalt(-1)).toThrow(Error);
    expect(() => generateSalt(-1)).toThrow(
      'length must be a positive integer',
    );
  });

  // Test case 17: Throw error for zero bytes
  it('17. should throw Error for zero bytes', () => {
    expect(() => generateSalt(0)).toThrow(Error);
    expect(() => generateSalt(0)).toThrow('length must be a positive integer');
  });

  // Test case 18: Throw error for non-integer bytes
  it('18. should throw Error for non-integer bytes', () => {
    expect(() => generateSalt(3.14)).toThrow(Error);
    expect(() => generateSalt(3.14)).toThrow(
      'length must be a positive integer',
    );
  });

  // Test case 19: Throw error for NaN
  it('19. should throw Error for NaN', () => {
    expect(() => generateSalt(NaN)).toThrow(Error);
    expect(() => generateSalt(NaN)).toThrow('length must be a valid number');
  });

  // Test case 20: Throw error for non-number type
  it('20. should throw TypeError for non-number type', () => {
    expect(() => generateSalt('32' as unknown as number)).toThrow(TypeError);
    expect(() => generateSalt('32' as unknown as number)).toThrow(
      'length must be a number',
    );
  });
});
