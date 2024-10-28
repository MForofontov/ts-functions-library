import { calculateExponential } from '../../mathFunctions/calculateExponential';

describe('calculateExponential', () => {
    // Test case 1: Exponent of 0
    it('1. should return 1 for an exponent of 0', () => {
        const input: number = 0;
        const expected: number = 1;
        const result: number = calculateExponential(input);
        expect(result).toBe(expected);
    });

    // Test case 2: Positive integer exponent
    it('2. should return the correct value for a positive integer exponent', () => {
        const input: number = 1;
        const expected: number = Math.exp(1);
        const result: number = calculateExponential(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 3: Negative integer exponent
    it('3. should return the correct value for a negative integer exponent', () => {
        const input: number = -1;
        const expected: number = Math.exp(-1);
        const result: number = calculateExponential(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 4: Positive decimal exponent
    it('4. should return the correct value for a positive decimal exponent', () => {
        const input: number = 0.5;
        const expected: number = Math.exp(0.5);
        const result: number = calculateExponential(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 5: Negative decimal exponent
    it('5. should return the correct value for a negative decimal exponent', () => {
        const input: number = -0.5;
        const expected: number = Math.exp(-0.5);
        const result: number = calculateExponential(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 6: Large positive exponent
    it('6. should return the correct value for a large positive exponent', () => {
        const input: number = 20;
        const expected: number = Math.exp(20);
        const result: number = calculateExponential(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 7: Large negative exponent
    it('7. should return the correct value for a large negative exponent', () => {
        const input: number = -20;
        const expected: number = Math.exp(-20);
        const result: number = calculateExponential(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 8: Exponent of NaN
    it('8. should return NaN for an exponent of NaN', () => {
        const input: number = NaN;
        const result: number = calculateExponential(input);
        expect(result).toBeNaN();
    });

    // Test case 9: Exponent of Infinity
    it('9. should return Infinity for an exponent of Infinity', () => {
        const input: number = Infinity;
        const expected: number = Infinity;
        const result: number = calculateExponential(input);
        expect(result).toBe(expected);
    });

    // Test case 10: Exponent of -Infinity
    it('10. should return 0 for an exponent of -Infinity', () => {
        const input: number = -Infinity;
        const expected: number = 0;
        const result: number = calculateExponential(input);
        expect(result).toBe(expected);
    });
});
