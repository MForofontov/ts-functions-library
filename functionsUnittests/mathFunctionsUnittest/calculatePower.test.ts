import { calculatePower } from '../../mathFunctions/calculatePower';

describe('calculatePower', () => {
    // Test case 1: Positive base and positive exponent
    it('1. should return the correct power for a positive base and positive exponent', () => {
        const base: number = 2;
        const exponent: number = 3;
        const expected: number = 8;
        const result: number = calculatePower(base, exponent);
        expect(result).toBe(expected);
    });

    // Test case 2: Positive base and zero exponent
    it('2. should return 1 for any base with exponent 0', () => {
        const base: number = 5;
        const exponent: number = 0;
        const expected: number = 1;
        const result: number = calculatePower(base, exponent);
        expect(result).toBe(expected);
    });

    // Test case 3: Positive base and negative exponent
    it('3. should return the correct power for a positive base and negative exponent', () => {
        const base: number = 2;
        const exponent: number = -2;
        const expected: number = 0.25;
        const result: number = calculatePower(base, exponent);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 4: Zero base and positive exponent
    it('4. should return 0 for base 0 with any positive exponent', () => {
        const base: number = 0;
        const exponent: number = 5;
        const expected: number = 0;
        const result: number = calculatePower(base, exponent);
        expect(result).toBe(expected);
    });

    // Test case 5: Zero base and zero exponent
    it('5. should return 1 for base 0 with exponent 0', () => {
        const base: number = 0;
        const exponent: number = 0;
        const expected: number = 1;
        const result: number = calculatePower(base, exponent);
        expect(result).toBe(expected);
    });

    // Test case 6: Negative base and positive exponent
    it('6. should return the correct power for a negative base and positive exponent', () => {
        const base: number = -2;
        const exponent: number = 3;
        const expected: number = -8;
        const result: number = calculatePower(base, exponent);
        expect(result).toBe(expected);
    });

    // Test case 7: Negative base and negative exponent
    it('7. should return the correct power for a negative base and negative exponent', () => {
        const base: number = -2;
        const exponent: number = -2;
        const expected: number = 0.25;
        const result: number = calculatePower(base, exponent);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 8: Non-integer base and exponent
    it('8. should return the correct power for a non-integer base and exponent', () => {
        const base: number = 2.5;
        const exponent: number = 1.5;
        const expected: number = Math.pow(2.5, 1.5);
        const result: number = calculatePower(base, exponent);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 9: Exception handling for null base
    it('9. should throw an error for null base', () => {
        expect(() => calculatePower(null as any, 2)).toThrow();
    });

    // Test case 10: Exception handling for null exponent
    it('10. should throw an error for null exponent', () => {
        expect(() => calculatePower(2, null as any)).toThrow();
    });

    // Test case 11: Exception handling for undefined base
    it('11. should throw an error for undefined base', () => {
        expect(() => calculatePower(undefined as any, 2)).toThrow();
    });

    // Test case 12: Exception handling for undefined exponent
    it('12. should throw an error for undefined exponent', () => {
        expect(() => calculatePower(2, undefined as any)).toThrow();
    });
});
