import { generatePrimes } from '../../arrayFunctions/generatePrimes';

describe('generatePrimes', () => {
  // Test case 1: Small limit
  it('1. should generate primes up to a small limit', () => {
    const limit: number = 10;
    expect(generatePrimes(limit)).toEqual([2, 3, 5, 7]);
  });

  // Test case 2: Larger limit
  it('2. should generate primes up to a larger limit', () => {
    const limit: number = 30;
    expect(generatePrimes(limit)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  // Test case 3: Limit 0
  it('3. should return an empty array when the limit is 0', () => {
    const limit: number = 0;
    expect(generatePrimes(limit)).toEqual([]);
  });

  // Test case 4: Limit 1
  it('4. should return an empty array when the limit is 1', () => {
    const limit: number = 1;
    expect(generatePrimes(limit)).toEqual([]);
  });

  // Test case 5: Negative limit
  it('5. should return an empty array when the limit is negative', () => {
    const limit: number = -10;
    expect(generatePrimes(limit)).toEqual([]);
  });

  // Test case 6: Limit 2 (first prime number)
  it('6. should return [2] when the limit is 2', () => {
    const limit: number = 2;
    expect(generatePrimes(limit)).toEqual([2]);
  });

  // Test case 7: Limit as a prime number
  it('7. should include the limit if it is a prime number', () => {
    const limit: number = 13;
    expect(generatePrimes(limit)).toEqual([2, 3, 5, 7, 11, 13]);
  });

  // Test case 8: Limit as a non-prime number
  it('8. should not include the limit if it is a non-prime number', () => {
    const limit: number = 15;
    expect(generatePrimes(limit)).toEqual([2, 3, 5, 7, 11, 13]);
  });

  // Test case 9: Very large limit
  it('9. should handle a very large limit', () => {
    const limit: number = 100;
    expect(generatePrimes(limit)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ]);
  });

  // Test case 10: Should handle or throw an error when the limit is a floating-point number
  it('10. should handle or throw an error when the limit is a floating-point number', () => {
    expect(() => generatePrimes(10.5)).toThrow(RangeError);
    expect(() => generatePrimes(10.5)).toThrow('Limit must be an integer');
  });

  // Test case 11: Limit as Infinity
  it('11. should handle or throw an error when the limit is Infinity', () => {
    const limit: number = Infinity;
    expect(() => generatePrimes(limit)).toThrow();
  });

  // Test case 12: Limit as NaN
  it('12. should handle or throw an error when the limit is NaN', () => {
    const limit: number = NaN;
    expect(() => generatePrimes(limit)).toThrow();
  });
});
