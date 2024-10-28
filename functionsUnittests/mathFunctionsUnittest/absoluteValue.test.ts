import { absoluteValue } from '../../mathFunctions/absoluteValue';

describe('absoluteValue', () => {
    // Test case 1: Positive number
    it('1. should return the same number for a positive number', () => {
        const input: number = 5;
        const expected: number = 5;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 2: Negative number
    it('2. should return the positive equivalent for a negative number', () => {
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

    // Test case 4: Positive decimal number
    it('4. should return the same number for a positive decimal number', () => {
        const input: number = 3.14;
        const expected: number = 3.14;
        const result: number = absoluteValue(input);
        expect(result).toBe(expected);
    });

    // Test case 5: Negative decimal number
    it('5. should return the positive equivalent for a negative decimal number', () => {
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
});
