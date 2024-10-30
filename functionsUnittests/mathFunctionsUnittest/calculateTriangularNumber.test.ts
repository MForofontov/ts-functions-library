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

    // Test case 5: Exception handling for null input
    it('5. should throw an error for null input', () => {
        expect(() => calculateTriangularNumber(null as any)).toThrow();
    });

    // Test case 6: Exception handling for undefined input
    it('6. should throw an error for undefined input', () => {
        expect(() => calculateTriangularNumber(undefined as any)).toThrow();
    });

    // Test case 7: Exception handling for non-number input (string)
    it('7. should throw an error for non-number input (string)', () => {
        expect(() => calculateTriangularNumber('string' as any)).toThrow();
    });

    // Test case 8: Exception handling for non-number input (object)
    it('8. should throw an error for non-number input (object)', () => {
        expect(() => calculateTriangularNumber({} as any)).toThrow();
    });

    // Test case 9: Exception handling for non-number input (array)
    it('9. should throw an error for non-number input (array)', () => {
        expect(() => calculateTriangularNumber([] as any)).toThrow();
    });
});
