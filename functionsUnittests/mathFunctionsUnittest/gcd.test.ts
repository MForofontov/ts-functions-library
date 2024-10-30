import { gcd } from '../../mathFunctions/gcd';

describe('gcd', () => {
    // Test case 1: GCD of two positive integers
    it('1. should return the correct GCD for two positive integers', () => {
        const a: number = 48;
        const b: number = 18;
        const expected: number = 6;
        const result: number = gcd(a, b);
        expect(result).toBe(expected);
    });

    // Test case 2: GCD of two negative integers
    it('2. should return the correct GCD for two negative integers', () => {
        const a: number = -48;
        const b: number = -18;
        const expected: number = 6;
        const result: number = gcd(a, b);
        expect(result).toBe(expected);
    });

    // Test case 3: GCD of a positive and a negative integer
    it('3. should return the correct GCD for a positive and a negative integer', () => {
        const a: number = 48;
        const b: number = -18;
        const expected: number = 6;
        const result: number = gcd(a, b);
        expect(result).toBe(expected);
    });

    // Test case 4: GCD of zero and a positive integer
    it('4. should return the positive integer when one number is zero', () => {
        const a: number = 0;
        const b: number = 18;
        const expected: number = 18;
        const result: number = gcd(a, b);
        expect(result).toBe(expected);
    });

    // Test case 5: GCD of zero and a negative integer
    it('5. should return the absolute value of the negative integer when one number is zero', () => {
        const a: number = 0;
        const b: number = -18;
        const expected: number = 18;
        const result: number = gcd(a, b);
        expect(result).toBe(expected);
    });

    // Test case 6: GCD of two zeros
    it('6. should return 0 when both numbers are zero', () => {
        const a: number = 0;
        const b: number = 0;
        const expected: number = 0;
        const result: number = gcd(a, b);
        expect(result).toBe(expected);
    });

    // Test case 7: GCD of a number and itself
    it('7. should return the number when both numbers are the same', () => {
        const a: number = 18;
        const b: number = 18;
        const expected: number = 18;
        const result: number = gcd(a, b);
        expect(result).toBe(expected);
    });

    // Test case 8: GCD of a number and 1
    it('8. should return 1 when one number is 1', () => {
        const a: number = 18;
        const b: number = 1;
        const expected: number = 1;
        const result: number = gcd(a, b);
        expect(result).toBe(expected);
    });

    // Test case 9: Exception handling for null input
    it('9. should throw an error for null input', () => {
        expect(() => gcd(null as any, 18)).toThrow();
        expect(() => gcd(18, null as any)).toThrow();
    });

    // Test case 10: Exception handling for undefined input
    it('10. should throw an error for undefined input', () => {
        expect(() => gcd(undefined as any, 18)).toThrow();
        expect(() => gcd(18, undefined as any)).toThrow();
    });

    // Test case 11: Exception handling for non-number input (string)
    it('11. should throw an error for non-number input (string)', () => {
        expect(() => gcd('string' as any, 18)).toThrow();
        expect(() => gcd(18, 'string' as any)).toThrow();
    });

    // Test case 12: Exception handling for non-number input (object)
    it('12. should throw an error for non-number input (object)', () => {
        expect(() => gcd({} as any, 18)).toThrow();
        expect(() => gcd(18, {} as any)).toThrow();
    });

    // Test case 13: Exception handling for non-number input (array)
    it('13. should throw an error for non-number input (array)', () => {
        expect(() => gcd([] as any, 18)).toThrow();
        expect(() => gcd(18, [] as any)).toThrow();
    });

    // Test case 14: Exception handling for floating-point input
    it('14. should throw an error for floating-point input', () => {
        expect(() => gcd(4.5, 18)).toThrow();
        expect(() => gcd(18, 4.5)).toThrow();
    });
});
