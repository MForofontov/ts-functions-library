import { compareHash } from '../../cryptoFunctions/compareHash';
import { hashMD5 } from '../../cryptoFunctions/hashMD5';
import { hashSHA256 } from '../../cryptoFunctions/hashSHA256';

/**
 * Unit tests for the compareHash function.
 */
describe('compareHash', () => {
  // Test case 1: Compare matching SHA-256 hashes
  it('1. should return true for matching SHA-256 hashes', () => {
    const data = 'hello world';
    const hash = 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9';
    const result = compareHash(data, hash, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 2: Compare non-matching SHA-256 hashes
  it('2. should return false for non-matching SHA-256 hashes', () => {
    const data = 'hello world';
    const hash =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'; // Wrong hash with correct length
    const result = compareHash(data, hash, 'sha256');
    expect(result).toBe(false);
  });

  // Test case 3: Compare matching SHA-512 hashes
  it('3. should return true for matching SHA-512 hashes', () => {
    const data = 'hello world';
    const hash =
      '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f';
    const result = compareHash(data, hash, 'sha512');
    expect(result).toBe(true);
  });

  // Test case 4: Compare non-matching SHA-512 hashes
  it('4. should return false for non-matching SHA-512 hashes', () => {
    const data = 'hello world';
    const hash =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'; // 128 chars
    const result = compareHash(data, hash, 'sha512');
    expect(result).toBe(false);
  });

  // Test case 5: Compare matching MD5 hashes
  it('5. should return true for matching MD5 hashes', () => {
    const data = 'hello world';
    const hash = '5eb63bbbe01eeed093cb22bb8f5acdc3';
    const result = compareHash(data, hash, 'md5');
    expect(result).toBe(true);
  });

  // Test case 6: Compare non-matching MD5 hashes
  it('6. should return false for non-matching MD5 hashes', () => {
    const data = 'hello world';
    const hash = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'; // Wrong hash with correct length
    const result = compareHash(data, hash, 'md5');
    expect(result).toBe(false);
  });

  // Test case 7: Compare with Buffer input
  it('7. should compare hash correctly with Buffer input', () => {
    const data = Buffer.from('hello world');
    const hash = 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9';
    const result = compareHash(data, hash, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 8: Compare empty string
  it('8. should compare hash correctly for empty string', () => {
    const data = '';
    const hash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    const result = compareHash(data, hash, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 9: Case sensitivity in data
  it('9. should be case-sensitive for data comparison', () => {
    const hash1 = hashSHA256('Hello');
    const hash2 = hashSHA256('hello');
    const result1 = compareHash('Hello', hash1, 'sha256');
    const result2 = compareHash('hello', hash2, 'sha256');
    // Both should be true since they match their respective hashes
    expect(result1).toBe(true);
    expect(result2).toBe(true);
    // But the hashes themselves should be different
    expect(hash1).not.toBe(hash2);
  });

  // Test case 10: Handle uppercase hash input
  it('10. should handle uppercase hash input correctly', () => {
    const data = 'hello world';
    const hash = 'B94D27B9934D3E08A52E52D7DA7DABFAC484EFE37A5380EE9088F7ACE2EFCDE9';
    const result = compareHash(data, hash, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 11: Wrong hash length for algorithm
  it('11. should throw error for wrong hash length', () => {
    const data = 'hello world';
    const hash = 'tooshort';
    expect(() => compareHash(data, hash, 'sha256')).toThrow(Error);
    expect(() => compareHash(data, hash, 'sha256')).toThrow(
      'hash length for sha256',
    );
  });

  // Test case 12: Compare with long data string
  it('12. should compare hash correctly with long data string', () => {
    const data = 'a'.repeat(10000);
    const hash = hashSHA256(data);
    const result = compareHash(data, hash, 'sha256');
    expect(result).toBe(true);
  });

  // Test case 13: Timing-safe comparison (should not throw)
  it('13. should use timing-safe comparison without errors', () => {
    const data = 'test';
    const hash = '098f6bcd4621d373cade4e832627b4f6';
    expect(() => compareHash(data, hash, 'md5')).not.toThrow();
  });

  // Test case 14: Compare with special characters
  it('14. should compare hash correctly with special characters', () => {
    const data = '!@#$%^&*()';
    const hash = hashMD5(data);
    const result = compareHash(data, hash, 'md5');
    expect(result).toBe(true);
  });

  // Test case 15: Compare with Unicode characters
  it('15. should compare hash correctly with Unicode characters', () => {
    const data = '你好';
    const hash = hashMD5(data);
    const result = compareHash(data, hash, 'md5');
    expect(result).toBe(true);
  });

  // Test case 16: Throw error for null data
  it('16. should throw TypeError when data is null', () => {
    const hash = 'somehash';
    expect(() =>
      compareHash(null as unknown as string, hash, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      compareHash(null as unknown as string, hash, 'sha256'),
    ).toThrow('data must be a string or Buffer');
  });

  // Test case 17: Throw error for undefined data
  it('17. should throw TypeError when data is undefined', () => {
    const hash = 'somehash';
    expect(() =>
      compareHash(undefined as unknown as string, hash, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      compareHash(undefined as unknown as string, hash, 'sha256'),
    ).toThrow('data must be a string or Buffer');
  });

  // Test case 18: Throw error for null hash
  it('18. should throw TypeError when hash is null', () => {
    const data = 'test';
    expect(() =>
      compareHash(data, null as unknown as string, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      compareHash(data, null as unknown as string, 'sha256'),
    ).toThrow('hash must be a string');
  });

  // Test case 19: Throw error for undefined hash
  it('19. should throw TypeError when hash is undefined', () => {
    const data = 'test';
    expect(() =>
      compareHash(data, undefined as unknown as string, 'sha256'),
    ).toThrow(TypeError);
    expect(() =>
      compareHash(data, undefined as unknown as string, 'sha256'),
    ).toThrow('hash must be a string');
  });

  // Test case 20: Throw error for invalid algorithm
  it('20. should throw Error for unsupported algorithm', () => {
    const data = 'test';
    const hash = 'somehash';
    const invalidAlgorithm = 'invalid';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => compareHash(data, hash, invalidAlgorithm as any)).toThrow(
      Error,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => compareHash(data, hash, invalidAlgorithm as any)).toThrow(
      'algorithm must be one of',
    );
  });
});
