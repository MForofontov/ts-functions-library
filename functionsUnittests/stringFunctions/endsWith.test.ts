import { endsWith } from '../../stringFunctions/endsWith';

/**
 * Unit tests for the endsWith function.
 */
describe('endsWith', () => {
    // Test case 1: Check if a string ends with a specified substring
    it('1. should return true if the string ends with the specified substring', () => {
        const str: string = "hello world";
        const end: string = "world";
        const expected: boolean = true;
        const result: boolean = endsWith(str, end);
        expect(result).toBe(expected);
    });

    // Test case 2: Check if a string does not end with a specified substring
    it('2. should return false if the string does not end with the specified substring', () => {
        const str: string = "hello world";
        const end: string = "hello";
        const expected: boolean = false;
        const result: boolean = endsWith(str, end);
        expect(result).toBe(expected);
    });

    // Test case 3: Check if a string ends with a specified substring with punctuation
    it('3. should return true if the string ends with the specified substring with punctuation', () => {
        const str: string = "hello world!";
        const end: string = "world!";
        const expected: boolean = true;
        const result: boolean = endsWith(str, end);
        expect(result).toBe(expected);
    });

    // Test case 4: Check if a string ends with a specified substring with numbers
    it('4. should return true if the string ends with the specified substring with numbers', () => {
        const str: string = "hello world 123";
        const end: string = "123";
        const expected: boolean = true;
        const result: boolean = endsWith(str, end);
        expect(result).toBe(expected);
    });

    // Test case 5: Check if a string ends with a specified substring with special characters
    it('5. should return true if the string ends with the specified substring with special characters', () => {
        const str: string = "hello world! @2023";
        const end: string = "@2023";
        const expected: boolean = true;
        const result: boolean = endsWith(str, end);
        expect(result).toBe(expected);
    });

    // Test case 6: Check if a single character string ends with the specified substring
    it('6. should return true if a single character string ends with the specified substring', () => {
        const str: string = "a";
        const end: string = "a";
        const expected: boolean = true;
        const result: boolean = endsWith(str, end);
        expect(result).toBe(expected);
    });

    // Test case 7: Check if an empty string ends with the specified substring
    it('7. should return false if an empty string ends with the specified substring', () => {
        const str: string = "";
        const end: string = "a";
        const expected: boolean = false;
        const result: boolean = endsWith(str, end);
        expect(result).toBe(expected);
    });

    // Test case 8: Check if a string with leading spaces ends with the specified substring
    it('8. should return true if a string with leading spaces ends with the specified substring', () => {
        const str: string = "   hello";
        const end: string = "hello";
        const expected: boolean = true;
        const result: boolean = endsWith(str, end);
        expect(result).toBe(expected);
    });

    // Test case 9: Check if a string with leading special characters ends with the specified substring
    it('9. should return true if a string with leading special characters ends with the specified substring', () => {
        const str: string = "@hello";
        const end: string = "hello";
        const expected: boolean = true;
        const result: boolean = endsWith(str, end);
        expect(result).toBe(expected);
    });

    // Test case 10: Check if a string ends with an empty substring
    it('10. should return true if a string ends with an empty substring', () => {
        const str: string = "hello";
        const end: string = "";
        const expected: boolean = true;
        const result: boolean = endsWith(str, end);
        expect(result).toBe(expected);
    });
});
