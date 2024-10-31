import { roundToDecimals } from '../../mathFunctions/roundToDecimals';

describe('roundToDecimals', () => {
    // Test case 1: Round a positive number to 0 decimal places
    it('1. should round a positive number to 0 decimal places', () => {
        const value: number = 5.6789;
        const decimals: number = 0;
        const expected: number = 6;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 2: Round a positive number to 2 decimal places
    it('2. should round a positive number to 2 decimal places', () => {
        const value: number = 5.6789;
        const decimals: number = 2;
        const expected: number = 5.68;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 3: Round a negative number to 2 decimal places
    it('3. should round a negative number to 2 decimal places', () => {
        const value: number = -5.6789;
        const decimals: number = 2;
        const expected: number = -5.68;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 4: Round a number with fewer decimal places than specified
    it('4. should round a number with fewer decimal places than specified', () => {
        const value: number = 5.6;
        const decimals: number = 2;
        const expected: number = 5.60;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 5: Round a number with more decimal places than specified
    it('5. should round a number with more decimal places than specified', () => {
        const value: number = 5.6789;
        const decimals: number = 3;
        const expected: number = 5.679;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 6: Round zero to any number of decimal places
    it('6. should round zero to any number of decimal places', () => {
        const value: number = 0;
        const decimals: number = 5;
        const expected: number = 0;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 7: Round a large number to 2 decimal places
    it('7. should round a large number to 2 decimal places', () => {
        const value: number = 123456.789;
        const decimals: number = 2;
        const expected: number = 123456.79;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 8: Round a small number to 2 decimal places
    it('8. should round a small number to 2 decimal places', () => {
        const value: number = 0.00056789;
        const decimals: number = 2;
        const expected: number = 0.00;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 9: Round a number to a negative number of decimal places (should throw an error)
    it('9. should throw an error when rounding to a negative number of decimal places', () => {
        const value: number = 5.6789;
        const decimals: number = -2;
        expect(() => roundToDecimals(value, decimals)).toThrow();
    });

    // Test case 10: Round a number with a non-integer number of decimal places (should throw an error)
    it('10. should throw an error when rounding to a non-integer number of decimal places', () => {
        const value: number = 5.6789;
        const decimals: number = 2.5;
        expect(() => roundToDecimals(value, decimals)).toThrow();
    });
});
