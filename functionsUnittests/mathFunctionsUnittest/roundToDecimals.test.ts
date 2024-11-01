import { roundToDecimals } from '../../mathFunctions/roundToDecimals';

describe('roundToDecimals', () => {
    // Test case 1: Round to 2 decimal places
    it('1. should round to 2 decimal places', () => {
        const value: number = 5.6789;
        const decimals: number = 2;
        const expected: number = 5.68;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 2: Round to 0 decimal places
    it('2. should round to 0 decimal places', () => {
        const value: number = 5.6789;
        const decimals: number = 0;
        const expected: number = 6;
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

    // Test case 6: Round a number to 1 decimal place
    it('6. should round a number to 1 decimal place', () => {
        const value: number = 5.6789;
        const decimals: number = 1;
        const expected: number = 5.7;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 7: Round a number to 5 decimal places
    it('7. should round a number to 5 decimal places', () => {
        const value: number = 5.678901234;
        const decimals: number = 5;
        const expected: number = 5.67890;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 8: Round a number to 10 decimal places
    it('8. should round a number to 10 decimal places', () => {
        const value: number = 5.67890123456789;
        const decimals: number = 10;
        const expected: number = 5.6789012346;
        const result: number = roundToDecimals(value, decimals);
        expect(result).toBe(expected);
    });

    // Test case 9: Round NaN (should throw an error)
    it('9. should throw an error for NaN input', () => {
        const value: number = NaN;
        const decimals: number = 2;
        expect(() => roundToDecimals(value, decimals)).toThrow('Both value and decimals must be numbers');
    });

    // Test case 10: Round to a non-integer number of decimal places (should throw an error)
    it('10. should throw an error when rounding to a non-integer number of decimal places', () => {
        const value: number = 5.6789;
        const decimals: number = 2.5;
        expect(() => roundToDecimals(value, decimals)).toThrow('Decimals must be an integer');
    });

    // Test case 11: Round to a negative number of decimal places (should throw an error)
    it('11. should throw an error when rounding to a negative number of decimal places', () => {
        const value: number = 5.6789;
        const decimals: number = -2;
        expect(() => roundToDecimals(value, decimals)).toThrow('Decimals must be a non-negative integer');
    });
});
