import { hashSHA256 } from '../../cryptoFunctions/hashSHA256';

/**
 * Unit tests for the hashSHA256 function.
 */
describe('hashSHA256', () => {
  // Test case 1: Hash a simple string
  it('1. should generate correct SHA-256 hash for a simple string', () => {
    const data = 'hello world';
    const result = hashSHA256(data);
    expect(result).toBe(
      'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9',
    );
    expect(result).toHaveLength(64); // SHA-256 produces 64 hex characters
  });

  // Test case 2: Hash an empty string
  it('2. should generate correct SHA-256 hash for an empty string', () => {
    const data = '';
    const result = hashSHA256(data);
    expect(result).toBe(
      'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    );
  });

  // Test case 3: Hash a Buffer
  it('3. should generate correct SHA-256 hash for a Buffer', () => {
    const data = Buffer.from('hello world');
    const result = hashSHA256(data);
    expect(result).toBe(
      'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9',
    );
  });

  // Test case 4: Hash with special characters
  it('4. should generate SHA-256 hash for string with special characters', () => {
    const data = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const result = hashSHA256(data);
    expect(result).toHaveLength(64);
    expect(result).toMatch(/^[a-f0-9]{64}$/);
  });

  // Test case 5: Hash with Unicode characters
  it('5. should generate SHA-256 hash for string with Unicode characters', () => {
    const data = '你好世界 🌍';
    const result = hashSHA256(data);
    expect(result).toHaveLength(64);
    expect(result).toMatch(/^[a-f0-9]{64}$/);
  });

  // Test case 6: Hash long string
  it('6. should generate SHA-256 hash for a long string', () => {
    const data = 'a'.repeat(10000);
    const result = hashSHA256(data);
    expect(result).toHaveLength(64);
    expect(result).toMatch(/^[a-f0-9]{64}$/);
  });

  // Test case 7: Same input produces same hash
  it('7. should produce the same hash for the same input', () => {
    const data = 'test data';
    const result1 = hashSHA256(data);
    const result2 = hashSHA256(data);
    expect(result1).toBe(result2);
  });

  // Test case 8: Different inputs produce different hashes
  it('8. should produce different hashes for different inputs', () => {
    const result1 = hashSHA256('data1');
    const result2 = hashSHA256('data2');
    expect(result1).not.toBe(result2);
  });

  // Test case 9: Hash with newlines
  it('9. should generate SHA-256 hash for string with newlines', () => {
    const data = 'line1\nline2\nline3';
    const result = hashSHA256(data);
    expect(result).toHaveLength(64);
    expect(result).toMatch(/^[a-f0-9]{64}$/);
  });

  // Test case 10: Hash with tabs
  it('10. should generate SHA-256 hash for string with tabs', () => {
    const data = 'column1\tcolumn2\tcolumn3';
    const result = hashSHA256(data);
    expect(result).toHaveLength(64);
    expect(result).toMatch(/^[a-f0-9]{64}$/);
  });

  // Test case 11: Hash numeric string
  it('11. should generate SHA-256 hash for numeric string', () => {
    const data = '1234567890';
    const result = hashSHA256(data);
    expect(result).toHaveLength(64);
    expect(result).toMatch(/^[a-f0-9]{64}$/);
  });

  // Test case 12: Hash with whitespace
  it('12. should generate SHA-256 hash for string with whitespace', () => {
    const data = '   spaces   ';
    const result = hashSHA256(data);
    expect(result).toHaveLength(64);
    expect(result).toMatch(/^[a-f0-9]{64}$/);
  });

  // Test case 13: Hash case sensitivity
  it('13. should produce different hashes for different cases', () => {
    const result1 = hashSHA256('Hello');
    const result2 = hashSHA256('hello');
    expect(result1).not.toBe(result2);
  });

  // Test case 14: Hash returns lowercase hex
  it('14. should return lowercase hexadecimal string', () => {
    const data = 'test';
    const result = hashSHA256(data);
    expect(result).toBe(result.toLowerCase());
    expect(result).not.toMatch(/[A-F]/);
  });

  // Test case 15: Hash empty Buffer
  it('15. should generate SHA-256 hash for empty Buffer', () => {
    const data = Buffer.from('');
    const result = hashSHA256(data);
    expect(result).toBe(
      'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    );
  });

  // Test case 16: Throw error for null
  it('16. should throw TypeError when data is null', () => {
    expect(() => hashSHA256(null as unknown as string)).toThrow(TypeError);
    expect(() => hashSHA256(null as unknown as string)).toThrow(
      'data must be a string or Buffer',
    );
  });

  // Test case 17: Throw error for undefined
  it('17. should throw TypeError when data is undefined', () => {
    expect(() => hashSHA256(undefined as unknown as string)).toThrow(TypeError);
    expect(() => hashSHA256(undefined as unknown as string)).toThrow(
      'data must be a string or Buffer',
    );
  });

  // Test case 18: Throw error for number
  it('18. should throw TypeError when data is a number', () => {
    expect(() => hashSHA256(123 as unknown as string)).toThrow(TypeError);
    expect(() => hashSHA256(123 as unknown as string)).toThrow(
      'data must be a string or Buffer',
    );
  });

  // Test case 19: Throw error for object
  it('19. should throw TypeError when data is an object', () => {
    expect(() => hashSHA256({} as unknown as string)).toThrow(TypeError);
    expect(() => hashSHA256({} as unknown as string)).toThrow(
      'data must be a string or Buffer',
    );
  });

  // Test case 20: Throw error for array
  it('20. should throw TypeError when data is an array', () => {
    expect(() => hashSHA256([] as unknown as string)).toThrow(TypeError);
    expect(() => hashSHA256([] as unknown as string)).toThrow(
      'data must be a string or Buffer',
    );
  });
});
