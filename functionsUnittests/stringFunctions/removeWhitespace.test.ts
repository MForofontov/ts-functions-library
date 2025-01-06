import { removeWhitespace } from '../../stringFunctions/removeWhitespace';

/**
 * Unit tests for the removeWhitespace function.
 */
describe('removeWhitespace', () => {
    // Test case 1: Remove whitespace from a string with leading, trailing, and multiple spaces
    it('1. should remove whitespace from a string with leading, trailing, and multiple spaces', () => {
        const str: string = "   hello   world   ";
        const expected: string = "helloworld";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Remove whitespace from a string with only spaces
    it('2. should remove whitespace from a string with only spaces', () => {
        const str: string = "     ";
        const expected: string = "";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Remove whitespace from a string with no spaces
    it('3. should return the original string if there are no spaces', () => {
        const str: string = "helloworld";
        const expected: string = "helloworld";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Remove whitespace from a string with tabs
    it('4. should remove whitespace from a string with tabs', () => {
        const str: string = "hello\tworld";
        const expected: string = "helloworld";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Remove whitespace from a string with newlines
    it('5. should remove whitespace from a string with newlines', () => {
        const str: string = "hello\nworld";
        const expected: string = "helloworld";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Remove whitespace from a string with mixed whitespace characters
    it('6. should remove whitespace from a string with mixed whitespace characters', () => {
        const str: string = "hello \t\n world";
        const expected: string = "helloworld";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Remove whitespace from an empty string
    it('7. should return an empty string if the input is an empty string', () => {
        const str: string = "";
        const expected: string = "";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Remove whitespace from a string with leading spaces
    it('8. should remove whitespace from a string with leading spaces', () => {
        const str: string = "   hello";
        const expected: string = "hello";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Remove whitespace from a string with trailing spaces
    it('9. should remove whitespace from a string with trailing spaces', () => {
        const str: string = "hello   ";
        const expected: string = "hello";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Remove whitespace from a string with spaces between words
    it('10. should remove whitespace from a string with spaces between words', () => {
        const str: string = "hello world";
        const expected: string = "helloworld";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Remove whitespace from a string with multiple spaces between words
    it('11. should remove whitespace from a string with multiple spaces between words', () => {
        const str: string = "hello   world";
        const expected: string = "helloworld";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 12: Remove whitespace from a string with mixed spaces and tabs
    it('12. should remove whitespace from a string with mixed spaces and tabs', () => {
        const str: string = "hello \t world";
        const expected: string = "helloworld";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });

    // Test case 13: Remove whitespace from a string with mixed spaces, tabs, and newlines
    it('13. should remove whitespace from a string with mixed spaces, tabs, and newlines', () => {
        const str: string = "hello \t\n world";
        const expected: string = "helloworld";
        const result: string = removeWhitespace(str);
        expect(result).toBe(expected);
    });
});
