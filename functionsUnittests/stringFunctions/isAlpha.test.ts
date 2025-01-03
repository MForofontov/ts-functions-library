import { isAlpha } from '../../stringFunctions/isAlpha';

/**
 * Unit tests for the isAlpha function.
 */
describe('isAlpha', () => {
    // Test case 1: Check if a string with only letters returns true
    it('1. should return true for a string with only letters', () => {
        const str: string = "Hello";
        const expected: boolean = true;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Check if a string with letters and numbers returns false
    it('2. should return false for a string with letters and numbers', () => {
        const str: string = "Hello123";
        const expected: boolean = false;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Check if a string with only numbers returns false
    it('3. should return false for a string with only numbers', () => {
        const str: string = "12345";
        const expected: boolean = false;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Check if an empty string returns false
    it('4. should return false for an empty string', () => {
        const str: string = "";
        const expected: boolean = false;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Check if a string with special characters returns false
    it('5. should return false for a string with special characters', () => {
        const str: string = "@#$%^&*";
        const expected: boolean = false;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Check if a string with mixed case letters returns true
    it('6. should return true for a string with mixed case letters', () => {
        const str: string = "HelloWorld";
        const expected: boolean = true;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Check if a string with leading spaces returns false
    it('7. should return false for a string with leading spaces', () => {
        const str: string = "   Hello";
        const expected: boolean = false;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Check if a string with trailing spaces returns false
    it('8. should return false for a string with trailing spaces', () => {
        const str: string = "Hello   ";
        const expected: boolean = false;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Check if a string with both leading and trailing spaces returns false
    it('9. should return false for a string with both leading and trailing spaces', () => {
        const str: string = "   Hello   ";
        const expected: boolean = false;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Check if a string with spaces between letters returns false
    it('10. should return false for a string with spaces between letters', () => {
        const str: string = "Hello World";
        const expected: boolean = false;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Check if a string with only one letter returns true
    it('11. should return true for a string with only one letter', () => {
        const str: string = "H";
        const expected: boolean = true;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 12: Check if a string with accented letters returns false
    it('12. should return false for a string with accented letters', () => {
        const str: string = "Héllo";
        const expected: boolean = false;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });

    // Test case 13: Check if a string with hyphenated words returns false
    it('13. should return false for a string with hyphenated words', () => {
        const str: string = "Hello-World";
        const expected: boolean = false;
        const result: boolean = isAlpha(str);
        expect(result).toBe(expected);
    });
});
