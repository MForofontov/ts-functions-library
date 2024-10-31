import { calculateLogarithm } from '../../mathFunctions/calculateLogarithm';

describe('calculateLogarithm', () => {
    // Test case 1: Logarithm of a positive number with base 10
    it('1. should return the correct logarithm for a positive number with base 10', () => {
        const n: number = 100;
        const base: number = 10;
        const expected: number = 2;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 2: Logarithm of a positive number with base e (natural logarithm)
    it('2. should return the correct natural logarithm for a positive number', () => {
        const n: number = Math.E;
        const expected: number = 1;
        const result: number = calculateLogarithm(n);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 3: Logarithm of 1 with any base
    it('3. should return 0 for the logarithm of 1 with any base', () => {
        const n: number = 1;
        const base: number = 10;
        const expected: number = 0;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 4: Logarithm of a positive number with base 2
    it('4. should return the correct logarithm for a positive number with base 2', () => {
        const n: number = 8;
        const base: number = 2;
        const expected: number = 3;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 5: Logarithm of a number with base 1 (should return NaN)
    it('5. should return NaN for the logarithm with base 1', () => {
        const n: number = 10;
        const base: number = 1;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBeNaN();
    });

    // Test case 6: Logarithm of a negative number (should return NaN)
    it('6. should return NaN for the logarithm of a negative number', () => {
        const n: number = -10;
        const base: number = 10;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBeNaN();
    });

    // Test case 7: Logarithm of zero (should return -Infinity)
    it('7. should return -Infinity for the logarithm of zero', () => {
        const n: number = 0;
        const base: number = 10;
        const expected: number = -Infinity;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBe(expected);
    });

    // Test case 8: Logarithm of NaN
    it('8. should return NaN for the logarithm of NaN', () => {
        const n: number = NaN;
        const base: number = 10;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBeNaN();
    });

    // Test case 9: Logarithm of Infinity
    it('9. should return Infinity for the logarithm of Infinity', () => {
        const n: number = Infinity;
        const base: number = 10;
        const expected: number = Infinity;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBe(expected);
    });

    // Test case 10: Logarithm of a very small positive number
    it('10. should return the correct logarithm for a very small positive number', () => {
        const n: number = 1e-10;
        const base: number = 10;
        const expected: number = -10;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 11: Logarithm of a very large positive number
    it('11. should return the correct logarithm for a very large positive number', () => {
        const n: number = 1e+10;
        const base: number = 10;
        const expected: number = 10;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 12: Logarithm of a floating-point number
    it('12. should return the correct logarithm for a floating-point number', () => {
        const n: number = 0.1;
        const base: number = 10;
        const expected: number = -1;
        const result: number = calculateLogarithm(n, base);
        expect(result).toBeCloseTo(expected, 5);
    });
});
