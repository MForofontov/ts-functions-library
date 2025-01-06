import { isWhitespace } from '../../stringFunctions/isWhitespace';

/**
 * Unit tests for the isWhitespace function.
 */
describe('isWhitespace', () => {
    // Test case 1: Check if a string with only spaces returns true
    it('1. should return true for a string with only spaces', () => {
        const str: string = "   ";
        const expected: boolean = true;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Check if a string with only tabs returns true
    it('2. should return true for a string with only tabs', () => {
        const str: string = "\t\t\t";
        const expected: boolean = true;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Check if a string with only newlines returns true
    it('3. should return true for a string with only newlines', () => {
        const str: string = "\n\n\n";
        const expected: boolean = true;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Check if a string with mixed whitespace characters returns true
    it('4. should return true for a string with mixed whitespace characters', () => {
        const str: string = " \t\n ";
        const expected: boolean = true;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Check if an empty string returns true
    it('5. should return true for an empty string', () => {
        const str: string = "";
        const expected: boolean = true;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Check if a string with non-whitespace characters returns false
    it('6. should return false for a string with non-whitespace characters', () => {
        const str: string = "abc";
        const expected: boolean = false;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Check if a string with leading whitespace and non-whitespace characters returns false
    it('7. should return false for a string with leading whitespace and non-whitespace characters', () => {
        const str: string = "   abc";
        const expected: boolean = false;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Check if a string with trailing whitespace and non-whitespace characters returns false
    it('8. should return false for a string with trailing whitespace and non-whitespace characters', () => {
        const str: string = "abc   ";
        const expected: boolean = false;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Check if a string with both leading and trailing whitespace and non-whitespace characters returns false
    it('9. should return false for a string with both leading and trailing whitespace and non-whitespace characters', () => {
        const str: string = "   abc   ";
        const expected: boolean = false;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Check if a string with only one space returns true
    it('10. should return true for a string with only one space', () => {
        const str: string = " ";
        const expected: boolean = true;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Check if a string with only one tab returns true
    it('11. should return true for a string with only one tab', () => {
        const str: string = "\t";
        const expected: boolean = true;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 12: Check if a string with only one newline returns true
    it('12. should return true for a string with only one newline', () => {
        const str: string = "\n";
        const expected: boolean = true;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 13: Check if a string with mixed whitespace and non-whitespace characters returns false
    it('13. should return false for a string with mixed whitespace and non-whitespace characters', () => {
        const str: string = " \t\n abc \t\n ";
        const expected: boolean = false;
        const result: boolean = isWhitespace(str);
        expect(result).toBe(expected);
    });
});
