import { isNumeric } from '../../stringFunctions/isNumeric';

/**
 * Unit tests for the isNumeric function.
 */
describe('isNumeric', () => {
    // Test case 1: Check if a string with only digits returns true
    it('1. should return true for a string with only digits', () => {
        const str: string = "12345";
        const expected: boolean = true;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Check if a string with digits and letters returns false
    it('2. should return false for a string with digits and letters', () => {
        const str: string = "123a5";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Check if a string with only letters returns false
    it('3. should return false for a string with only letters', () => {
        const str: string = "abcde";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Check if an empty string returns false
    it('4. should return false for an empty string', () => {
        const str: string = "";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Check if a string with special characters returns false
    it('5. should return false for a string with special characters', () => {
        const str: string = "@#$%^&*";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Check if a string with mixed digits and special characters returns false
    it('6. should return false for a string with mixed digits and special characters', () => {
        const str: string = "123@45";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Check if a string with leading spaces returns false
    it('7. should return false for a string with leading spaces', () => {
        const str: string = "   12345";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Check if a string with trailing spaces returns false
    it('8. should return false for a string with trailing spaces', () => {
        const str: string = "12345   ";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Check if a string with both leading and trailing spaces returns false
    it('9. should return false for a string with both leading and trailing spaces', () => {
        const str: string = "   12345   ";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Check if a string with spaces between digits returns false
    it('10. should return false for a string with spaces between digits', () => {
        const str: string = "12 345";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Check if a string with only one digit returns true
    it('11. should return true for a string with only one digit', () => {
        const str: string = "1";
        const expected: boolean = true;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 12: Check if a string with a decimal point returns false
    it('12. should return false for a string with a decimal point', () => {
        const str: string = "123.45";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });

    // Test case 13: Check if a string with a negative sign returns false
    it('13. should return false for a string with a negative sign', () => {
        const str: string = "-12345";
        const expected: boolean = false;
        const result: boolean = isNumeric(str);
        expect(result).toBe(expected);
    });
});
