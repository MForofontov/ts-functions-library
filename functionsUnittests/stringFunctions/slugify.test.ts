import { slugify } from '../../stringFunctions/slugify';

/**
 * Unit tests for the slugify function.
 */
describe('slugify', () => {
    // Test case 1: Convert a simple string to slug format
    it('1. should convert a simple string to slug format', () => {
        const str: string = "Hello World";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Convert a string with multiple spaces to slug format
    it('2. should convert a string with multiple spaces to slug format', () => {
        const str: string = "Hello   World";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Convert a string with special characters to slug format
    it('3. should convert a string with special characters to slug format', () => {
        const str: string = "Hello @World!";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Convert a string with numbers to slug format
    it('4. should convert a string with numbers to slug format', () => {
        const str: string = "Hello 123 World";
        const expected: string = "hello-123-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Convert a string with mixed characters to slug format
    it('5. should convert a string with mixed characters to slug format', () => {
        const str: string = "Hello a1@ b2# c3$";
        const expected: string = "hello-a1-b2-c3";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Convert a string with leading spaces to slug format
    it('6. should convert a string with leading spaces to slug format', () => {
        const str: string = "  Hello World";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Convert a string with trailing spaces to slug format
    it('7. should convert a string with trailing spaces to slug format', () => {
        const str: string = "Hello World  ";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Convert a string with both leading and trailing spaces to slug format
    it('8. should convert a string with both leading and trailing spaces to slug format', () => {
        const str: string = "  Hello World  ";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Convert a string with newlines to slug format
    it('9. should convert a string with newlines to slug format', () => {
        const str: string = "Hello\nWorld";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Convert a string with tabs to slug format
    it('10. should convert a string with tabs to slug format', () => {
        const str: string = "Hello\tWorld";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Convert an empty string to slug format
    it('11. should return an empty string when converting an empty string to slug format', () => {
        const str: string = "";
        const expected: string = "";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 12: Convert a single word string to slug format
    it('12. should return the same string when converting a single word string to slug format', () => {
        const str: string = "Hello";
        const expected: string = "hello";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 13: Convert a string with multiple hyphens to slug format
    it('13. should convert a string with multiple hyphens to slug format', () => {
        const str: string = "Hello--World";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 14: Convert a string with mixed case to slug format
    it('14. should convert a string with mixed case to slug format', () => {
        const str: string = "Hello World";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });

    // Test case 15: Convert a string with punctuation to slug format
    it('15. should convert a string with punctuation to slug format', () => {
        const str: string = "Hello, world!";
        const expected: string = "hello-world";
        const result: string = slugify(str);
        expect(result).toBe(expected);
    });
});
