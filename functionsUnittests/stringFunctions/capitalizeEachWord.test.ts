import { capitalizeEachWord } from '../../stringFunctions/capitalizeEachWord';

/**
 * Unit tests for the capitalizeEachWord function.
 */
describe('capitalizeEachWord', () => {
    // Test case 1: Capitalize each word in a simple sentence
    it('1. should capitalize each word in a simple sentence', () => {
        const str: string = "hello world";
        const expected: string = "Hello World";
        const result: string = capitalizeEachWord(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Capitalize each word in a sentence with mixed case
    it('2. should capitalize each word in a sentence with mixed case', () => {
        const str: string = "hElLo WoRLd";
        const expected: string = "HElLo WoRLd";
        const result: string = capitalizeEachWord(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Capitalize each word in a sentence with punctuation
    it('3. should capitalize each word in a sentence with punctuation', () => {
        const str: string = "hello, world!";
        const expected: string = "Hello, World!";
        const result: string = capitalizeEachWord(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Capitalize each word in a sentence with numbers
    it('4. should capitalize each word in a sentence with numbers', () => {
        const str: string = "hello world 123";
        const expected: string = "Hello World 123";
        const result: string = capitalizeEachWord(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Capitalize each word in a sentence with special characters
    it('5. should capitalize each word in a sentence with special characters', () => {
        const str: string = "hello world! @2023";
        const expected: string = "Hello World! @2023";
        const result: string = capitalizeEachWord(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Capitalize each word in a sentence with multiple spaces
    it('6. should capitalize each word in a sentence with multiple spaces', () => {
        const str: string = "hello    world";
        const expected: string = "Hello    World";
        const result: string = capitalizeEachWord(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Capitalize each word in a single word
    it('7. should capitalize a single word', () => {
        const str: string = "hello";
        const expected: string = "Hello";
        const result: string = capitalizeEachWord(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Capitalize each word in an empty string
    it('8. should return an empty string when input is an empty string', () => {
        const str: string = "";
        const expected: string = "";
        const result: string = capitalizeEachWord(str);
        expect(result).toBe(expected);
    });
});
