import { firstNonRepeatingCharacter } from '../../stringFunctions/firstNonRepeatingCharacter';

/**
 * Unit tests for the firstNonRepeatingCharacter function.
 */
describe('firstNonRepeatingCharacter', () => {
    // Test case 1: Find the first non-repeating character in a simple string
    it('1. should find the first non-repeating character in a simple string', () => {
        const str: string = "abacabad";
        const expected: string | null = "c";
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Find the first non-repeating character in a string with all repeating characters
    it('2. should return null for a string with all repeating characters', () => {
        const str: string = "aabbcc";
        const expected: string | null = null;
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Find the first non-repeating character in a string with mixed case
    it('3. should find the first non-repeating character in a string with mixed case', () => {
        const str: string = "aAbBcCdD";
        const expected: string | null = "a";
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Find the first non-repeating character in a string with special characters
    it('4. should find the first non-repeating character in a string with special characters', () => {
        const str: string = "a@b@c@d@";
        const expected: string | null = "a";
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Find the first non-repeating character in a string with numbers
    it('5. should find the first non-repeating character in a string with numbers', () => {
        const str: string = "1122334455";
        const expected: string | null = null;
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Find the first non-repeating character in a string with leading spaces
    it('6. should find the first non-repeating character in a string with leading spaces', () => {
        const str: string = "  abacabad";
        const expected: string | null = " ";
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Find the first non-repeating character in a string with trailing spaces
    it('7. should find the first non-repeating character in a string with trailing spaces', () => {
        const str: string = "abacabad  ";
        const expected: string | null = "c";
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Find the first non-repeating character in a string with both leading and trailing spaces
    it('8. should find the first non-repeating character in a string with both leading and trailing spaces', () => {
        const str: string = "  abacabad  ";
        const expected: string | null = " ";
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Find the first non-repeating character in a string with a single character
    it('9. should find the first non-repeating character in a string with a single character', () => {
        const str: string = "a";
        const expected: string | null = "a";
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Find the first non-repeating character in an empty string
    it('10. should return null for an empty string', () => {
        const str: string = "";
        const expected: string | null = null;
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Find the first non-repeating character in a string with multiple non-repeating characters
    it('11. should find the first non-repeating character in a string with multiple non-repeating characters', () => {
        const str: string = "abacabadc";
        const expected: string | null = "d";
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 12: Find the first non-repeating character in a string with repeating spaces
    it('12. should find the first non-repeating character in a string with repeating spaces', () => {
        const str: string = "a b a c a b a d";
        const expected: string | null = "c";
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });

    // Test case 13: Find the first non-repeating character in a string with hyphenated words
    it('13. should find the first non-repeating character in a string with hyphenated words', () => {
        const str: string = "a-b-a-c-a-b-a-d";
        const expected: string | null = "c";
        const result: string | null = firstNonRepeatingCharacter(str);
        expect(result).toBe(expected);
    });
});
