import { capitalizeFirstLetter } from '../../stringFunctions/capitalizeFirstLetter';

/**
 * Unit tests for the capitalizeFirstLetter function.
 */
describe('capitalizeFirstLetter', () => {
    // Test case 1: Capitalize the first letter of a simple word
    it('1. should capitalize the first letter of a simple word', () => {
        const str: string = "hello";
        const expected: string = "Hello";
        const result: string = capitalizeFirstLetter(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Capitalize the first letter of a word with mixed case
    it('2. should capitalize the first letter of a word with mixed case', () => {
        const str: string = "hElLo";
        const expected: string = "HElLo";
        const result: string = capitalizeFirstLetter(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Capitalize the first letter of a word with punctuation
    it('3. should capitalize the first letter of a word with punctuation', () => {
        const str: string = "hello!";
        const expected: string = "Hello!";
        const result: string = capitalizeFirstLetter(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Capitalize the first letter of a word with numbers
    it('4. should capitalize the first letter of a word with numbers', () => {
        const str: string = "hello123";
        const expected: string = "Hello123";
        const result: string = capitalizeFirstLetter(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Capitalize the first letter of a word with special characters
    it('5. should capitalize the first letter of a word with special characters', () => {
        const str: string = "hello@world";
        const expected: string = "Hello@world";
        const result: string = capitalizeFirstLetter(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Capitalize the first letter of a single character
    it('6. should capitalize a single character', () => {
        const str: string = "h";
        const expected: string = "H";
        const result: string = capitalizeFirstLetter(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Capitalize the first letter of an empty string
    it('7. should return an empty string when input is an empty string', () => {
        const str: string = "";
        const expected: string = "";
        const result: string = capitalizeFirstLetter(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Capitalize the first letter of a string with leading spaces
    it('8. should capitalize the first letter of a string with leading spaces', () => {
        const str: string = "   hello";
        const expected: string = "   hello"; // Leading spaces should remain unchanged
        const result: string = capitalizeFirstLetter(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Capitalize the first letter of a string with leading special characters
    it('9. should capitalize the first letter of a string with leading special characters', () => {
        const str: string = "@hello";
        const expected: string = "@Hello";
        const result: string = capitalizeFirstLetter(str);
        expect(result).toBe(expected);
    });
});
