import { generateRandomString } from '../../stringFunctions/generateRandomString';

/**
 * Unit tests for the generateRandomString function.
 */
describe('generateRandomString', () => {
  // Test case 1: Generate a random string of a given length from a specified charset
  it('1. should generate a random string of a given length from a specified charset', () => {
    const length: number = 10;
    const charset: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const result: string = generateRandomString(length, charset);
    expect(result).toHaveLength(length);
    expect(result).toMatch(new RegExp(`^[${charset}]+$`));
  });

  // Test case 2: Generate a random string of length 0
  it('2. should generate an empty string when length is 0', () => {
    const length: number = 0;
    const charset: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const expected: string = '';
    const result: string = generateRandomString(length, charset);
    expect(result).toBe(expected);
  });

  // Test case 3: Generate a random string of length 1
  it('3. should generate a random string of length 1', () => {
    const length: number = 1;
    const charset: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const result: string = generateRandomString(length, charset);
    expect(result).toHaveLength(length);
    expect(result).toMatch(new RegExp(`^[${charset}]$`));
  });

  // Test case 4: Generate a random string of a large length
  it('4. should generate a random string of a large length', () => {
    const length: number = 1000;
    const charset: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const result: string = generateRandomString(length, charset);
    expect(result).toHaveLength(length);
    expect(result).toMatch(new RegExp(`^[${charset}]+$`));
  });

  // Test case 5: Generate a random string with non-numeric length
  it('5. should throw an error when length is non-numeric', () => {
    const length: any = 'a';
    const charset: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    expect(() => generateRandomString(length, charset)).toThrow(
      'Length must be a non-negative number',
    );
  });

  // Test case 6: Generate a random string with negative length
  it('6. should throw an error when length is negative', () => {
    const length: number = -1;
    const charset: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    expect(() => generateRandomString(length, charset)).toThrow(
      'Length must be a non-negative number',
    );
  });

  // Test case 7: Generate a random string with an empty charset
  it('7. should throw an error when charset is empty', () => {
    const length: number = 10;
    const charset: string = '';
    expect(() => generateRandomString(length, charset)).toThrow(
      'Charset must contain at least one character',
    );
  });

  // Test case 8: Generate a random string with a single character charset
  it('8. should generate a string of repeated characters when charset has a single character', () => {
    const length: number = 10;
    const charset: string = 'A';
    const expected: string = 'A'.repeat(length);
    const result: string = generateRandomString(length, charset);
    expect(result).toBe(expected);
  });

  // Test case 9: Generate a random string with special characters in charset
  it('9. should generate a random string with special characters in charset', () => {
    const length: number = 10;
    const charset: string = '!@#$%^&*()';
    const result: string = generateRandomString(length, charset);
    expect(result).toHaveLength(length);
    expect(result).toMatch(
      new RegExp(`^[${charset.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}]+$`),
    );
  });

  // Test case 10: Generate a random string with numeric characters in charset
  it('10. should generate a random string with numeric characters in charset', () => {
    const length: number = 10;
    const charset: string = '0123456789';
    const result: string = generateRandomString(length, charset);
    expect(result).toHaveLength(length);
    expect(result).toMatch(new RegExp(`^[${charset}]+$`));
  });
});
