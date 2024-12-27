import { countConsonants } from '../../stringFunctions/countConsonants';

/**
 * Unit tests for the countConsonants function.
 */
describe('countConsonants', () => {
    // Test case 1: Count consonants in a simple sentence
    it('1. should count consonants in a simple sentence', () => {
        const str: string = "Hello world";
        const expected: number = 7;
        const result: number = countConsonants(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Count consonants in a sentence with mixed case
    it('2. should count consonants in a sentence with mixed case', () => {
        const str: string = "HeLLo WoRLd";
        const expected: number = 7;
        const result: number = countConsonants(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Count consonants in a sentence with punctuation
    it('3. should count consonants in a sentence with punctuation', () => {
        const str: string = "Hello, world!";
        const expected: number = 7;
        const result: number = countConsonants(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Count consonants in a sentence with numbers
    it('4. should count consonants in a sentence with numbers', () => {
        const str: string = "Hello world 123";
        const expected: number = 7;
        const result: number = countConsonants(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Count consonants in a sentence with special characters
    it('5. should count consonants in a sentence with special characters', () => {
        const str: string = "Hello world! @2023";
        const expected: number = 7;
        const result: number = countConsonants(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Count consonants in a single word
    it('6. should count consonants in a single word', () => {
        const str: string = "hello";
        const expected: number = 3;
        const result: number = countConsonants(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Count consonants in an empty string
    it('7. should return 0 for an empty string', () => {
        const str: string = "";
        const expected: number = 0;
        const result: number = countConsonants(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Count consonants in a string with leading spaces
    it('8. should count consonants in a string with leading spaces', () => {
        const str: string = "   hello";
        const expected: number = 3;
        const result: number = countConsonants(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Count consonants in a string with leading special characters
    it('9. should count consonants in a string with leading special characters', () => {
        const str: string = "@hello";
        const expected: number = 3;
        const result: number = countConsonants(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Count consonants in a string with only vowels
    it('10. should return 0 for a string with only vowels', () => {
        const str: string = "aeiou";
        const expected: number = 0;
        const result: number = countConsonants(str);
        expect(result).toBe(expected);
    });
});
