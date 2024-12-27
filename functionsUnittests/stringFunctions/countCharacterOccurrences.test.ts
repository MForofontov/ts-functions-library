import { countCharacterOccurrences } from '../../stringFunctions/countCharacterOccurrences';

/**
 * Unit tests for the countCharacterOccurrences function.
 */
describe('countCharacterOccurrences', () => {
    // Test case 1: Count occurrences of a character in a simple sentence
    it('1. should count occurrences of a character in a simple sentence', () => {
        const str: string = "hello world";
        const char: string = "l";
        const expected: number = 3;
        const result: number = countCharacterOccurrences(str, char);
        expect(result).toBe(expected);
    });

    // Test case 2: Count occurrences of a character that does not exist in the string
    it('2. should return 0 for a character that does not exist in the string', () => {
        const str: string = "hello world";
        const char: string = "z";
        const expected: number = 0;
        const result: number = countCharacterOccurrences(str, char);
        expect(result).toBe(expected);
    });

    // Test case 3: Count occurrences of a character in a string with mixed case
    it('3. should count occurrences of a character in a string with mixed case', () => {
        const str: string = "Hello World";
        const char: string = "l";
        const expected: number = 2;
        const result: number = countCharacterOccurrences(str, char);
        expect(result).toBe(expected);
    });

    // Test case 4: Count occurrences of a character in a string with punctuation
    it('4. should count occurrences of a character in a string with punctuation', () => {
        const str: string = "hello, world!";
        const char: string = "o";
        const expected: number = 2;
        const result: number = countCharacterOccurrences(str, char);
        expect(result).toBe(expected);
    });

    // Test case 5: Count occurrences of a character in a string with numbers
    it('5. should count occurrences of a character in a string with numbers', () => {
        const str: string = "hello world 123";
        const char: string = "1";
        const expected: number = 1;
        const result: number = countCharacterOccurrences(str, char);
        expect(result).toBe(expected);
    });

    // Test case 6: Count occurrences of a character in a string with special characters
    it('6. should count occurrences of a character in a string with special characters', () => {
        const str: string = "hello world! @2023";
        const char: string = "@";
        const expected: number = 1;
        const result: number = countCharacterOccurrences(str, char);
        expect(result).toBe(expected);
    });

    // Test case 7: Count occurrences of a character in a single character string
    it('7. should count occurrences of a character in a single character string', () => {
        const str: string = "a";
        const char: string = "a";
        const expected: number = 1;
        const result: number = countCharacterOccurrences(str, char);
        expect(result).toBe(expected);
    });

    // Test case 8: Count occurrences of a character in an empty string
    it('8. should return 0 for an empty string', () => {
        const str: string = "";
        const char: string = "a";
        const expected: number = 0;
        const result: number = countCharacterOccurrences(str, char);
        expect(result).toBe(expected);
    });

    // Test case 9: Count occurrences of a character in a string with leading spaces
    it('9. should count occurrences of a character in a string with leading spaces', () => {
        const str: string = "   hello";
        const char: string = "h";
        const expected: number = 1;
        const result: number = countCharacterOccurrences(str, char);
        expect(result).toBe(expected);
    });

    // Test case 10: Count occurrences of a character in a string with leading special characters
    it('10. should count occurrences of a character in a string with leading special characters', () => {
        const str: string = "@hello";
        const char: string = "h";
        const expected: number = 1;
        const result: number = countCharacterOccurrences(str, char);
        expect(result).toBe(expected);
    });
});
