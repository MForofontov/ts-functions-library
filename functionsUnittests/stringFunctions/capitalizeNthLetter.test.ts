import { capitalizeNthLetter } from '../../stringFunctions/capitalizeNthLetter';

/**
 * Unit tests for the capitalizeNthLetter function.
 */
describe('capitalizeNthLetter', () => {
    // Test case 1: Capitalize every 2nd letter in a simple sentence
    it('1. should capitalize every 2nd letter in a simple sentence', () => {
        const str: string = "hello world";
        const n: number = 2;
        const expected: string = "hElLo wOrLd";
        const result: string = capitalizeNthLetter(str, n);
        expect(result).toBe(expected);
    });

    // Test case 2: Capitalize every 3rd letter in a simple sentence
    it('2. should capitalize every 3rd letter in a simple sentence', () => {
        const str: string = "hello world";
        const n: number = 3;
        const expected: string = "heLlo woRld";
        const result: string = capitalizeNthLetter(str, n);
        expect(result).toBe(expected);
    });

    // Test case 3: Capitalize every 1st letter in a simple sentence
    it('3. should capitalize every 1st letter in a simple sentence', () => {
        const str: string = "hello world";
        const n: number = 1;
        const expected: string = "HELLO WORLD";
        const result: string = capitalizeNthLetter(str, n);
        expect(result).toBe(expected);
    });

    // Test case 4: Capitalize every 2nd letter in a sentence with punctuation
    it('4. should capitalize every 2nd letter in a sentence with punctuation', () => {
        const str: string = "hello, world!";
        const n: number = 2;
        const expected: string = "hElLo, wOrLd!";
        const result: string = capitalizeNthLetter(str, n);
        expect(result).toBe(expected);
    });

    // Test case 5: Capitalize every 2nd letter in a sentence with numbers
    it('5. should capitalize every 2nd letter in a sentence with numbers', () => {
        const str: string = "hello world 123";
        const n: number = 2;
        const expected: string = "hElLo wOrLd 123";
        const result: string = capitalizeNthLetter(str, n);
        expect(result).toBe(expected);
    });

    // Test case 6: Capitalize every 2nd letter in a sentence with special characters
    it('6. should capitalize every 2nd letter in a sentence with special characters', () => {
        const str: string = "hello world! @2023";
        const n: number = 2;
        const expected: string = "hElLo wOrLd! @2023";
        const result: string = capitalizeNthLetter(str, n);
        expect(result).toBe(expected);
    });

    // Test case 7: Capitalize every 2nd letter in a single word
    it('7. should capitalize every 2nd letter in a single word', () => {
        const str: string = "hello";
        const n: number = 2;
        const expected: string = "hElLo";
        const result: string = capitalizeNthLetter(str, n);
        expect(result).toBe(expected);
    });

    // Test case 8: Capitalize every 2nd letter in an empty string
    it('8. should return an empty string when input is an empty string', () => {
        const str: string = "";
        const n: number = 2;
        const expected: string = "";
        const result: string = capitalizeNthLetter(str, n);
        expect(result).toBe(expected);
    });

    // Test case 9: Capitalize every 2nd letter in a string with leading spaces
    it('9. should capitalize every 2nd letter in a string with leading spaces', () => {
        const str: string = "   hello";
        const n: number = 2;
        const expected: string = "   hElLo";
        const result: string = capitalizeNthLetter(str, n);
        expect(result).toBe(expected);
    });

    // Test case 10: Capitalize every 2nd letter in a string with leading special characters
    it('10. should capitalize every 2nd letter in a string with leading special characters', () => {
        const str: string = "@hello";
        const n: number = 2;
        const expected: string = "@hElLo";
        const result: string = capitalizeNthLetter(str, n);
        expect(result).toBe(expected);
    });
});
