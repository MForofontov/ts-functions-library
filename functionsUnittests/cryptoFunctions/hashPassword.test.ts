import { hashPassword } from '../../cryptoFunctions/hashPassword';

/**
 * Unit tests for the hashPassword function.
 */
describe('hashPassword', () => {
  const testPassword = 'MySecurePassword123!';
  const testSalt = 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4';

  // Test case 1: Hash password with default iterations
  it('1. should hash password with default iterations', async () => {
    const result = await hashPassword(testPassword, testSalt);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  // Test case 2: Hash produces 128-character hex string
  it('2. should produce 128-character hex string', async () => {
    const result = await hashPassword(testPassword, testSalt);
    expect(result.length).toBe(128);
    expect(result).toMatch(/^[a-f0-9]+$/);
  });

  // Test case 3: Same inputs produce same hash
  it('3. should produce same hash for same inputs', async () => {
    const result1 = await hashPassword(testPassword, testSalt);
    const result2 = await hashPassword(testPassword, testSalt);
    expect(result1).toBe(result2);
  });

  // Test case 4: Different passwords produce different hashes
  it('4. should produce different hashes for different passwords', async () => {
    const result1 = await hashPassword('password1', testSalt);
    const result2 = await hashPassword('password2', testSalt);
    expect(result1).not.toBe(result2);
  });

  // Test case 5: Different salts produce different hashes
  it('5. should produce different hashes for different salts', async () => {
    const salt1 = 'a'.repeat(32);
    const salt2 = 'b'.repeat(32);
    const result1 = await hashPassword(testPassword, salt1);
    const result2 = await hashPassword(testPassword, salt2);
    expect(result1).not.toBe(result2);
  });

  // Test case 6: Hash with custom iterations
  it('6. should hash password with custom iterations', async () => {
    const result = await hashPassword(testPassword, testSalt, 50000);
    expect(typeof result).toBe('string');
    expect(result.length).toBe(128);
  });

  // Test case 7: More iterations take more time
  it('7. should take longer with more iterations', async () => {
    const start1 = Date.now();
    await hashPassword(testPassword, testSalt, 10000);
    const time1 = Date.now() - start1;

    const start2 = Date.now();
    await hashPassword(testPassword, testSalt, 50000);
    const time2 = Date.now() - start2;

    expect(time2).toBeGreaterThan(time1);
  }, 30000);

  // Test case 8: Hash single character password
  it('8. should hash single character password', async () => {
    const result = await hashPassword('a', testSalt);
    expect(typeof result).toBe('string');
    expect(result.length).toBe(128);
  });

  // Test case 9: Hash with special characters
  it('9. should hash password with special characters', async () => {
    const specialPassword = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const result = await hashPassword(specialPassword, testSalt);
    expect(typeof result).toBe('string');
    expect(result.length).toBe(128);
  });

  // Test case 10: Hash with Unicode characters
  it('10. should hash password with Unicode characters', async () => {
    const unicodePassword = '密码123 🔐';
    const result = await hashPassword(unicodePassword, testSalt);
    expect(typeof result).toBe('string');
    expect(result.length).toBe(128);
  });

  // Test case 11: Hash is case-sensitive
  it('11. should be case-sensitive for password', async () => {
    const result1 = await hashPassword('Password', testSalt);
    const result2 = await hashPassword('password', testSalt);
    expect(result1).not.toBe(result2);
  });

  // Test case 12: Hash long password
  it('12. should hash long password', async () => {
    const longPassword = 'A'.repeat(1000);
    const result = await hashPassword(longPassword, testSalt);
    expect(typeof result).toBe('string');
    expect(result.length).toBe(128);
  });

  // Test case 13: Hash returns lowercase hex
  it('13. should return lowercase hexadecimal', async () => {
    const result = await hashPassword(testPassword, testSalt);
    expect(result).toBe(result.toLowerCase());
    expect(result).not.toMatch(/[A-F]/);
  });

  // Test case 14: Hash with minimum iterations
  it('14. should hash with minimum iterations (1000)', async () => {
    const result = await hashPassword(testPassword, testSalt, 1000);
    expect(typeof result).toBe('string');
    expect(result.length).toBe(128);
  });

  // Test case 15: Function returns Promise
  it('15. should return a Promise', () => {
    const result = hashPassword(testPassword, testSalt);
    expect(result).toBeInstanceOf(Promise);
  });

  // Error test cases (always at the end)

  // Test case 16: Throw error for null password
  it('16. should throw TypeError when password is null', async () => {
    await expect(
      hashPassword(null as unknown as string, testSalt),
    ).rejects.toThrow(TypeError);
    await expect(
      hashPassword(null as unknown as string, testSalt),
    ).rejects.toThrow('password must be a string');
  });

  // Test case 17: Throw error for undefined password
  it('17. should throw TypeError when password is undefined', async () => {
    await expect(
      hashPassword(undefined as unknown as string, testSalt),
    ).rejects.toThrow(TypeError);
    await expect(
      hashPassword(undefined as unknown as string, testSalt),
    ).rejects.toThrow('password must be a string');
  });

  // Test case 18: Throw error for null salt
  it('18. should throw TypeError when salt is null', async () => {
    await expect(
      hashPassword(testPassword, null as unknown as string),
    ).rejects.toThrow(TypeError);
    await expect(
      hashPassword(testPassword, null as unknown as string),
    ).rejects.toThrow('salt must be a string');
  });

  // Test case 19: Throw error for undefined salt
  it('19. should throw TypeError when salt is undefined', async () => {
    await expect(
      hashPassword(testPassword, undefined as unknown as string),
    ).rejects.toThrow(TypeError);
    await expect(
      hashPassword(testPassword, undefined as unknown as string),
    ).rejects.toThrow('salt must be a string');
  });

  // Test case 20: Throw error for invalid iterations
  it('20. should throw Error for invalid iterations', async () => {
    await expect(hashPassword(testPassword, testSalt, 0)).rejects.toThrow(
      Error,
    );
    await expect(hashPassword(testPassword, testSalt, 0)).rejects.toThrow(
      'iterations must be a positive integer',
    );
  });
});
