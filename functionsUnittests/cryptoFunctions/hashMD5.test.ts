import { hashMD5 } from '../../cryptoFunctions/hashMD5';

/**
 * Unit tests for the hashMD5 function.
 */
describe('hashMD5', () => {
  // Test case 1: Hash a simple string
  it('1. should generate correct MD5 hash for a simple string', () => {
    const data = 'hello world';
    const result = hashMD5(data);
    expect(result).toBe('5eb63bbbe01eeed093cb22bb8f5acdc3');
    expect(result).toHaveLength(32); // MD5 produces 32 hex characters
  });

  // Test case 2: Hash an empty string
  it('2. should generate correct MD5 hash for an empty string', () => {
    const data = '';
    const result = hashMD5(data);
    expect(result).toBe('d41d8cd98f00b204e9800998ecf8427e');
  });

  // Test case 3: Hash a Buffer
  it('3. should generate correct MD5 hash for a Buffer', () => {
    const data = Buffer.from('hello world');
    const result = hashMD5(data);
    expect(result).toBe('5eb63bbbe01eeed093cb22bb8f5acdc3');
  });

  // Test case 4: Hash with special characters
  it('4. should generate MD5 hash for string with special characters', () => {
    const data = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const result = hashMD5(data);
    expect(result).toHaveLength(32);
    expect(result).toMatch(/^[a-f0-9]{32}$/);
  });

  // Test case 5: Hash with Unicode characters
  it('5. should generate MD5 hash for string with Unicode characters', () => {
    const data = '你好世界 🌍';
    const result = hashMD5(data);
    expect(result).toHaveLength(32);
    expect(result).toMatch(/^[a-f0-9]{32}$/);
  });

  // Test case 6: Hash long string
  it('6. should generate MD5 hash for a long string', () => {
    const data = 'a'.repeat(10000);
    const result = hashMD5(data);
    expect(result).toHaveLength(32);
    expect(result).toMatch(/^[a-f0-9]{32}$/);
  });

  // Test case 7: Same input produces same hash
  it('7. should produce the same hash for the same input', () => {
    const data = 'test data';
    const result1 = hashMD5(data);
    const result2 = hashMD5(data);
    expect(result1).toBe(result2);
  });

  // Test case 8: Different inputs produce different hashes
  it('8. should produce different hashes for different inputs', () => {
    const result1 = hashMD5('data1');
    const result2 = hashMD5('data2');
    expect(result1).not.toBe(result2);
  });

  // Test case 9: Hash with newlines
  it('9. should generate MD5 hash for string with newlines', () => {
    const data = 'line1\nline2\nline3';
    const result = hashMD5(data);
    expect(result).toHaveLength(32);
    expect(result).toMatch(/^[a-f0-9]{32}$/);
  });

  // Test case 10: Hash numeric string
  it('10. should generate MD5 hash for numeric string', () => {
    const data = '1234567890';
    const result = hashMD5(data);
    expect(result).toHaveLength(32);
    expect(result).toMatch(/^[a-f0-9]{32}$/);
  });

  // Test case 11: Hash case sensitivity
  it('11. should produce different hashes for different cases', () => {
    const result1 = hashMD5('Hello');
    const result2 = hashMD5('hello');
    expect(result1).not.toBe(result2);
  });

  // Test case 12: Hash returns lowercase hex
  it('12. should return lowercase hexadecimal string', () => {
    const data = 'test';
    const result = hashMD5(data);
    expect(result).toBe(result.toLowerCase());
    expect(result).not.toMatch(/[A-F]/);
  });

  // Test case 13: MD5 produces shorter hash than SHA-256
  it('13. should produce 32-character hash (shorter than SHA-256)', () => {
    const data = 'test';
    const result = hashMD5(data);
    expect(result.length).toBe(32);
    expect(result.length).toBeLessThan(64); // SHA-256 is 64 chars
  });

  // Test case 14: Hash empty Buffer
  it('14. should generate MD5 hash for empty Buffer', () => {
    const data = Buffer.from('');
    const result = hashMD5(data);
    expect(result).toBe('d41d8cd98f00b204e9800998ecf8427e');
  });

  // Test case 15: Known MD5 test vectors
  it('15. should generate correct MD5 for known test vectors', () => {
    expect(hashMD5('The quick brown fox jumps over the lazy dog')).toBe(
      '9e107d9d372bb6826bd81d3542a419d6',
    );
    expect(hashMD5('The quick brown fox jumps over the lazy dog.')).toBe(
      'e4d909c290d0fb1ca068ffaddf22cbd0',
    );
  });

  // Test case 16: Throw error for null
  it('16. should throw TypeError when data is null', () => {
    expect(() => hashMD5(null as unknown as string)).toThrow(TypeError);
    expect(() => hashMD5(null as unknown as string)).toThrow(
      'data must be a string or Buffer',
    );
  });

  // Test case 17: Throw error for undefined
  it('17. should throw TypeError when data is undefined', () => {
    expect(() => hashMD5(undefined as unknown as string)).toThrow(TypeError);
    expect(() => hashMD5(undefined as unknown as string)).toThrow(
      'data must be a string or Buffer',
    );
  });

  // Test case 18: Throw error for number
  it('18. should throw TypeError when data is a number', () => {
    expect(() => hashMD5(123 as unknown as string)).toThrow(TypeError);
    expect(() => hashMD5(123 as unknown as string)).toThrow(
      'data must be a string or Buffer',
    );
  });

  // Test case 19: Throw error for object
  it('19. should throw TypeError when data is an object', () => {
    expect(() => hashMD5({} as unknown as string)).toThrow(TypeError);
    expect(() => hashMD5({} as unknown as string)).toThrow(
      'data must be a string or Buffer',
    );
  });

  // Test case 20: Throw error for array
  it('20. should throw TypeError when data is an array', () => {
    expect(() => hashMD5([] as unknown as string)).toThrow(TypeError);
    expect(() => hashMD5([] as unknown as string)).toThrow(
      'data must be a string or Buffer',
    );
  });
});
