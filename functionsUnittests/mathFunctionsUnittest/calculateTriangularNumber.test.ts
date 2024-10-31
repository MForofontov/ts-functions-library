import { calculateTriangularNumber } from '../../mathFunctions/calculateTriangularNumber';

describe('calculateTriangularNumber', () => {
    // Test case 1: Triangular number for a positive integer
    it('1. should return the correct triangular number for a positive integer', () => {
        const input: number = 5;
        const expected: number = 15;
        const result: number = calculateTriangularNumber(input);
        expect(result).toBe(expected);
    });

    // Test case 2: Triangular number for zero
    it('2. should return 0 for the triangular number of 0', () => {
        const input: number = 0;
        const expected: number = 0;
        const result: number = calculateTriangularNumber(input);
        expect(result).toBe(expected);
    });

    // Test case 3: Triangular number for a negative integer
    it('3. should throw an error for a negative integer', () => {
        const input: number = -5;
        expect(() => calculateTriangularNumber(input)).toThrow();
    });

    // Test case 4: Triangular number for a non-integer number
    it('4. should throw an error for a non-integer number', () => {
        const input: number = 5.5;
        expect(() => calculateTriangularNumber(input)).toThrow();
    });
});
