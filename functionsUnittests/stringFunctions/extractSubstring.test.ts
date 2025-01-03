import { extractSubstring } from '../../stringFunctions/extractSubstring';

/**
 * Unit tests for the extractSubstring function.
 */
describe('extractSubstring', () => {
    // Test case 1: Extract a substring from a simple string
    it('1. should extract a substring from a simple string', () => {
        const str: string = "hello world";
        const start: number = 0;
        const end: number = 5;
        const expected: string = "hello";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 2: Extract a substring from a string with mixed case
    it('2. should extract a substring from a string with mixed case', () => {
        const str: string = "HeLLo WoRLd";
        const start: number = 2;
        const end: number = 7;
        const expected: string = "LLo W";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 3: Extract a substring from a string with special characters
    it('3. should extract a substring from a string with special characters', () => {
        const str: string = "hello@world!";
        const start: number = 5;
        const end: number = 11;
        const expected: string = "@world";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 4: Extract a substring from a string with numbers
    it('4. should extract a substring from a string with numbers', () => {
        const str: string = "hello12345";
        const start: number = 5;
        const end: number = 10;
        const expected: string = "12345";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 5: Extract a substring from a string with leading spaces
    it('5. should extract a substring from a string with leading spaces', () => {
        const str: string = "   hello world";
        const start: number = 3;
        const end: number = 8;
        const expected: string = "hello";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 6: Extract a substring from a string with trailing spaces
    it('6. should extract a substring from a string with trailing spaces', () => {
        const str: string = "hello world   ";
        const start: number = 0;
        const end: number = 5;
        const expected: string = "hello";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 7: Extract a substring from a string with both leading and trailing spaces
    it('7. should extract a substring from a string with both leading and trailing spaces', () => {
        const str: string = "   hello world   ";
        const start: number = 3;
        const end: number = 8;
        const expected: string = "hello";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 8: Extract a substring from a string with a single character
    it('8. should extract a substring from a string with a single character', () => {
        const str: string = "a";
        const start: number = 0;
        const end: number = 1;
        const expected: string = "a";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 9: Extract a substring from an empty string
    it('9. should return an empty string when input is an empty string', () => {
        const str: string = "";
        const start: number = 0;
        const end: number = 1;
        const expected: string = "";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 10: Extract a substring with start index greater than end index
    it('10. should return an empty string when start index is greater than end index', () => {
        const str: string = "hello world";
        const start: number = 5;
        const end: number = 0;
        const expected: string = "";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 11: Extract a substring with start index equal to end index
    it('11. should return an empty string when start index is equal to end index', () => {
        const str: string = "hello world";
        const start: number = 5;
        const end: number = 5;
        const expected: string = "";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 12: Extract a substring with negative start index
    it('12. should extract a substring with negative start index', () => {
        const str: string = "hello world";
        const start: number = -5;
        const end: number = 5;
        const expected: string = "hello";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });

    // Test case 13: Extract a substring with end index greater than string length
    it('13. should extract a substring with end index greater than string length', () => {
        const str: string = "hello world";
        const start: number = 0;
        const end: number = 20;
        const expected: string = "hello world";
        const result: string = extractSubstring(str, start, end);
        expect(result).toBe(expected);
    });
});
