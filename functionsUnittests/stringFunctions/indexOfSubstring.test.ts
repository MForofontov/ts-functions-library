import { indexOfSubstring } from '../../stringFunctions/indexOfSubstring';

/**
 * Unit tests for the indexOfSubstring function.
 */
describe('indexOfSubstring', () => {
    // Test case 1: Find the index of a substring in a simple string
    it('1. should find the index of a substring in a simple string', () => {
        const str: string = "hello world";
        const substr: string = "world";
        const expected: number = 6;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 2: Find the index of a substring that is not present
    it('2. should return -1 for a substring that is not present', () => {
        const str: string = "hello world";
        const substr: string = "planet";
        const expected: number = -1;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 3: Find the index of a substring at the beginning
    it('3. should find the index of a substring at the beginning', () => {
        const str: string = "hello world";
        const substr: string = "hello";
        const expected: number = 0;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 4: Find the index of a substring at the end
    it('4. should find the index of a substring at the end', () => {
        const str: string = "hello world";
        const substr: string = "world";
        const expected: number = 6;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 5: Find the index of a substring with special characters
    it('5. should find the index of a substring with special characters', () => {
        const str: string = "hello @world!";
        const substr: string = "@world";
        const expected: number = 6;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 6: Find the index of a substring with numbers
    it('6. should find the index of a substring with numbers', () => {
        const str: string = "hello 12345";
        const substr: string = "123";
        const expected: number = 6;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 7: Find the index of a substring with mixed case
    it('7. should find the index of a substring with mixed case', () => {
        const str: string = "Hello World";
        const substr: string = "World";
        const expected: number = 6;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 8: Find the index of a substring with leading spaces
    it('8. should find the index of a substring with leading spaces', () => {
        const str: string = "   hello world";
        const substr: string = "hello";
        const expected: number = 3;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 9: Find the index of a substring with trailing spaces
    it('9. should find the index of a substring with trailing spaces', () => {
        const str: string = "hello world   ";
        const substr: string = "world";
        const expected: number = 6;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 10: Find the index of a substring with both leading and trailing spaces
    it('10. should find the index of a substring with both leading and trailing spaces', () => {
        const str: string = "   hello world   ";
        const substr: string = "hello";
        const expected: number = 3;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 11: Find the index of a substring that is the entire string
    it('11. should find the index of a substring that is the entire string', () => {
        const str: string = "hello";
        const substr: string = "hello";
        const expected: number = 0;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 12: Find the index of an empty substring
    it('12. should return 0 for an empty substring', () => {
        const str: string = "hello";
        const substr: string = "";
        const expected: number = 0;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });

    // Test case 13: Find the index of a substring with multiple occurrences
    it('13. should find the index of the first occurrence of a substring with multiple occurrences', () => {
        const str: string = "hello world hello";
        const substr: string = "hello";
        const expected: number = 0;
        const result: number = indexOfSubstring(str, substr);
        expect(result).toBe(expected);
    });
});
