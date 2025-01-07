import { replaceSubstring } from '../../stringFunctions/replaceSubstring';

/**
 * Unit tests for the replaceSubstring function.
 */
describe('replaceSubstring', () => {
    // Test case 1: Replace all instances of a substring
    it('1. should replace all instances of a substring', () => {
        const str: string = "hello world, hello universe";
        const target: string = "hello";
        const replacement: string = "hi";
        const expected: string = "hi world, hi universe";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 2: Replace a substring that appears only once
    it('2. should replace a substring that appears only once', () => {
        const str: string = "hello world";
        const target: string = "world";
        const replacement: string = "everyone";
        const expected: string = "hello everyone";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 3: Replace a substring that appears multiple times
    it('3. should replace a substring that appears multiple times', () => {
        const str: string = "hello hello hello";
        const target: string = "hello";
        const replacement: string = "hi";
        const expected: string = "hi hi hi";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 4: Replace a substring that is at the beginning
    it('4. should replace a substring that is at the beginning', () => {
        const str: string = "hello world";
        const target: string = "hello";
        const replacement: string = "hi";
        const expected: string = "hi world";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 5: Replace a substring that is at the end
    it('5. should replace a substring that is at the end', () => {
        const str: string = "world hello";
        const target: string = "hello";
        const replacement: string = "hi";
        const expected: string = "world hi";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 6: Replace a substring with special characters
    it('6. should replace a substring with special characters', () => {
        const str: string = "hello @world, hello @universe";
        const target: string = "@world";
        const replacement: string = "@everyone";
        const expected: string = "hello @everyone, hello @universe";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 7: Replace a substring with numbers
    it('7. should replace a substring with numbers', () => {
        const str: string = "hello 123, hello 456";
        const target: string = "123";
        const replacement: string = "789";
        const expected: string = "hello 789, hello 456";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 8: Replace a substring with mixed characters
    it('8. should replace a substring with mixed characters', () => {
        const str: string = "hello a1@, hello b2#";
        const target: string = "a1@";
        const replacement: string = "c3$";
        const expected: string = "hello c3$, hello b2#";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 9: Replace a substring with spaces
    it('9. should replace a substring with spaces', () => {
        const str: string = "hello world, hello universe";
        const target: string = "hello ";
        const replacement: string = "hi ";
        const expected: string = "hi world, hi universe";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 10: Replace a substring with leading spaces
    it('10. should replace a substring with leading spaces', () => {
        const str: string = " hello world, hello universe";
        const target: string = " hello";
        const replacement: string = " hi";
        const expected: string = " hi world, hi universe";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 11: Replace a substring with trailing spaces
    it('11. should replace a substring with trailing spaces', () => {
        const str: string = "hello world , hello universe";
        const target: string = "world ";
        const replacement: string = "everyone ";
        const expected: string = "hello everyone , hello universe";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 12: Replace a substring with newlines
    it('12. should replace a substring with newlines', () => {
        const str: string = "hello\nworld, hello\nuniverse";
        const target: string = "hello\n";
        const replacement: string = "hi\n";
        const expected: string = "hi\nworld, hi\nuniverse";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 13: Replace a substring with tabs
    it('13. should replace a substring with tabs', () => {
        const str: string = "hello\tworld, hello\tuniverse";
        const target: string = "hello\t";
        const replacement: string = "hi\t";
        const expected: string = "hi\tworld, hi\tuniverse";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 14: Replace a substring that does not exist
    it('14. should return the original string if the target substring does not exist', () => {
        const str: string = "hello world";
        const target: string = "planet";
        const replacement: string = "everyone";
        const expected: string = "hello world";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });

    // Test case 15: Replace an empty substring
    it('15. should return the original string if the target substring is empty', () => {
        const str: string = "hello world";
        const target: string = "";
        const replacement: string = "everyone";
        const expected: string = "hello world";
        const result: string = replaceSubstring(str, target, replacement);
        expect(result).toBe(expected);
    });
});
