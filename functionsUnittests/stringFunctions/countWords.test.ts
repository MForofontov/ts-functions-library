import { countWords } from '../../stringFunctions/countWords';

/**
 * Unit tests for the countWords function.
 */
describe('countWords', () => {
    // Test case 1: Count words in a simple sentence
    it('1. should count words in a simple sentence', () => {
        const str: string = "Hello world! This is a test.";
        const expected: number = 6;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Count words in a sentence with multiple spaces
    it('2. should count words in a sentence with multiple spaces', () => {
        const str: string = "Hello   world!  This is   a test.";
        const expected: number = 6;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Count words in a sentence with leading and trailing spaces
    it('3. should count words in a sentence with leading and trailing spaces', () => {
        const str: string = "   Hello world! This is a test.   ";
        const expected: number = 6;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Count words in a sentence with punctuation
    it('4. should count words in a sentence with punctuation', () => {
        const str: string = "Hello, world! This is a test.";
        const expected: number = 6;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Count words in a sentence with numbers
    it('5. should count words in a sentence with numbers', () => {
        const str: string = "Hello world 123 456.";
        const expected: number = 5;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Count words in a sentence with special characters
    it('6. should count words in a sentence with special characters', () => {
        const str: string = "Hello world! @2023";
        const expected: number = 3;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Count words in a single word
    it('7. should count words in a single word', () => {
        const str: string = "hello";
        const expected: number = 1;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Count words in an empty string
    it('8. should return 0 for an empty string', () => {
        const str: string = "";
        const expected: number = 0;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Count words in a string with only spaces
    it('9. should return 0 for a string with only spaces', () => {
        const str: string = "     ";
        const expected: number = 0;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Count words in a string with leading spaces
    it('10. should count words in a string with leading spaces', () => {
        const str: string = "   hello world";
        const expected: number = 2;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Count words in a string with leading special characters
    it('11. should count words in a string with leading special characters', () => {
        const str: string = "@hello world";
        const expected: number = 2;
        const result: number = countWords(str);
        expect(result).toBe(expected);
    });
});
