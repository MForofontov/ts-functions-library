import { absoluteValue } from '../../mathFunctions/absoluteValue';

describe('absoluteValue', () => {
    // Test case 1: Positive integer
    it('1. should return the same number for a positive integer', () => {
        const input: number = 5;
        const expected: number = 5;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 2: Negative integer
    it('2. should return the positive equivalent for a negative integer', () => {
        const input: number = -5;
        const expected: number = 5;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 3: Zero
    it('3. should return zero for zero', () => {
        const input: number = 0;
        const expected: number = 0;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 4: Positive decimal
    it('4. should return the same number for a positive decimal', () => {
        const input: number = 3.14;
        const expected: number = 3.14;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 5: Negative decimal
    it('5. should return the positive equivalent for a negative decimal', () => {
        const input: number = -3.14;
        const expected: number = 3.14;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 6: NaN
    it('6. should return NaN for NaN', () => {
        const input: number = NaN;
        const result: number = absoluteValue(input);
        expect(result).toBeNaN();
    });

    // Test case 7: Positive Infinity
    it('7. should return Infinity for positive Infinity', () => {
        const input: number = Infinity;
        const expected: number = Infinity;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 8: Negative Infinity
    it('8. should return Infinity for negative Infinity', () => {
        const input: number = -Infinity;
        const expected: number = Infinity;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 9: Large positive integer
    it('9. should return the same number for a large positive integer', () => {
        const input: number = 1000000;
        const expected: number = 1000000;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 10: Large negative integer
    it('10. should return the positive equivalent for a large negative integer', () => {
        const input: number = -1000000;
        const expected: number = 1000000;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 11: Small positive decimal
    it('11. should return the same number for a small positive decimal', () => {
        const input: number = 0.0001;
        const expected: number = 0.0001;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 12: Small negative decimal
    it('12. should return the positive equivalent for a small negative decimal', () => {
        const input: number = -0.0001;
        const expected: number = 0.0001;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 13: Positive integer as a string (should return NaN)
    it('13. should return NaN for a positive integer as a string', () => {
        const input: any = "5";
        const result: number = absoluteValue(input);
        expect(result).toBeNaN();
    });

    // Test case 14: Negative integer as a string (should return NaN)
    it('14. should return NaN for a negative integer as a string', () => {
        const input: any = "-5";
        const result: number = absoluteValue(input);
        expect(result).toBeNaN();
    });
});
