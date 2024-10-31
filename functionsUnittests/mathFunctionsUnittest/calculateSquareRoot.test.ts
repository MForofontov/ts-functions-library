import { calculateSquareRoot } from '../../mathFunctions/calculateSquareRoot';

describe('calculateSquareRoot', () => {
    // Test case 1: Square root of a positive number
    it('1. should return the correct square root for a positive number', () => {
        const input: number = 9;
        const expected: number = 3;
        const result: number = calculateSquareRoot(input);
        expect(result).toBe(expected);
    });

    // Test case 2: Square root of zero
    it('2. should return 0 for the square root of 0', () => {
        const input: number = 0;
        const expected: number = 0;
        const result: number = calculateSquareRoot(input);
        expect(result).toBe(expected);
    });

    // Test case 3: Square root of a negative number
    it('3. should throw an error for the square root of a negative number', () => {
        const input: number = -9;
        expect(() => calculateSquareRoot(input)).toThrow();
    });

    // Test case 4: Square root of a non-integer number
    it('4. should return the correct square root for a non-integer number', () => {
        const input: number = 2.25;
        const expected: number = 1.5;
        const result: number = calculateSquareRoot(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 5: Square root of a very large number
    it('5. should return the correct square root for a very large number', () => {
        const input: number = 1e12;
        const expected: number = 1e6;
        const result: number = calculateSquareRoot(input);
        expect(result).toBe(expected);
    });
});
