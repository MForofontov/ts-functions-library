import { countVowels } from '../../stringFunctions/countVowels';

/**
 * Unit tests for the countVowels function.
 */
describe('countVowels', () => {
    // Test case 1: Count vowels in a simple sentence
    it('1. should count vowels in a simple sentence', () => {
        const str: string = "Hello world";
        const expected: number = 3;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Count vowels in a sentence with mixed case
    it('2. should count vowels in a sentence with mixed case', () => {
        const str: string = "HeLLo WoRLd";
        const expected: number = 3;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Count vowels in a sentence with punctuation
    it('3. should count vowels in a sentence with punctuation', () => {
        const str: string = "Hello, world!";
        const expected: number = 3;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Count vowels in a sentence with numbers
    it('4. should count vowels in a sentence with numbers', () => {
        const str: string = "Hello world 123";
        const expected: number = 3;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Count vowels in a sentence with special characters
    it('5. should count vowels in a sentence with special characters', () => {
        const str: string = "Hello world! @2023";
        const expected: number = 3;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Count vowels in a single word
    it('6. should count vowels in a single word', () => {
        const str: string = "hello";
        const expected: number = 2;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Count vowels in an empty string
    it('7. should return 0 for an empty string', () => {
        const str: string = "";
        const expected: number = 0;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Count vowels in a string with leading spaces
    it('8. should count vowels in a string with leading spaces', () => {
        const str: string = "   hello";
        const expected: number = 2;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Count vowels in a string with leading special characters
    it('9. should count vowels in a string with leading special characters', () => {
        const str: string = "@hello";
        const expected: number = 2;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Count vowels in a string with only consonants
    it('10. should return 0 for a string with only consonants', () => {
        const str: string = "bcdfghjklmnpqrstvwxyz";
        const expected: number = 0;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Count vowels in a string with all vowels
    it('11. should count vowels in a string with all vowels', () => {
        const str: string = "aeiouAEIOU";
        const expected: number = 10;
        const result: number = countVowels(str);
        expect(result).toBe(expected);
    });
});
