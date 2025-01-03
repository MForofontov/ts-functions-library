import { findLongestWord } from '../../stringFunctions/findLongestWord';

/**
 * Unit tests for the findLongestWord function.
 */
describe('findLongestWord', () => {
    // Test case 1: Find the longest word in a simple sentence
    it('1. should find the longest word in a simple sentence', () => {
        const str: string = "The quick brown fox jumps over the lazy dog";
        const expected: string = "jumps";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Find the longest word in a sentence with mixed case
    it('2. should find the longest word in a sentence with mixed case', () => {
        const str: string = "The Quick Brown Fox Jumps Over The Lazy Dog";
        const expected: string = "Jumps";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Find the longest word in a sentence with punctuation
    it('3. should find the longest word in a sentence with punctuation', () => {
        const str: string = "The quick, brown fox jumps over the lazy dog.";
        const expected: string = "quick,";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Find the longest word in a sentence with numbers
    it('4. should find the longest word in a sentence with numbers', () => {
        const str: string = "The quick brown fox jumps over the lazy dog 12345";
        const expected: string = "12345";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Find the longest word in a sentence with special characters
    it('5. should find the longest word in a sentence with special characters', () => {
        const str: string = "The quick brown fox jumps over the lazy dog @2023";
        const expected: string = "brown";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Find the longest word in a single word string
    it('6. should find the longest word in a single word string', () => {
        const str: string = "hello";
        const expected: string = "hello";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Find the longest word in an empty string
    it('7. should return an empty string when input is an empty string', () => {
        const str: string = "";
        const expected: string = "";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Find the longest word in a string with leading spaces
    it('8. should find the longest word in a string with leading spaces', () => {
        const str: string = "   The quick brown fox jumps over the lazy dog";
        const expected: string = "jumps";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Find the longest word in a string with trailing spaces
    it('9. should find the longest word in a string with trailing spaces', () => {
        const str: string = "The quick brown fox jumps over the lazy dog   ";
        const expected: string = "jumps";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Find the longest word in a string with both leading and trailing spaces
    it('10. should find the longest word in a string with both leading and trailing spaces', () => {
        const str: string = "   The quick brown fox jumps over the lazy dog   ";
        const expected: string = "jumps";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Find the longest word in a string with multiple spaces between words
    it('11. should find the longest word in a string with multiple spaces between words', () => {
        const str: string = "The  quick   brown    fox     jumps      over       the        lazy         dog";
        const expected: string = "jumps";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 12: Find the longest word in a string with hyphenated words
    it('12. should find the longest word in a string with hyphenated words', () => {
        const str: string = "The quick brown fox jumps over the lazy dog-like creature";
        const expected: string = "dog-like";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });

    // Test case 13: Find the longest word in a string with equal length words
    it('13. should find the first longest word in a string with equal length words', () => {
        const str: string = "The quick brown fox";
        const expected: string = "quick";
        const result: string = findLongestWord(str);
        expect(result).toBe(expected);
    });
});
