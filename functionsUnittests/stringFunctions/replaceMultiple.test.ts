import { replaceMultiple } from '../../stringFunctions/replaceMultiple';

/**
 * Unit tests for the replaceMultiple function.
 */
describe('replaceMultiple', () => {
    // Test case 1: Replace multiple substrings in a string
    it('1. should replace multiple substrings in a string', () => {
        const str: string = "Hello World! Hello Universe!";
        const replacements: { [key: string]: string } = { "Hello": "Hi", "World": "Earth" };
        const expected: string = "Hi Earth! Hi Universe!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 2: Replace a single substring in a string
    it('2. should replace a single substring in a string', () => {
        const str: string = "Hello World!";
        const replacements: { [key: string]: string } = { "World": "Earth" };
        const expected: string = "Hello Earth!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 3: Replace substrings with special characters
    it('3. should replace substrings with special characters', () => {
        const str: string = "Hello @World! Hello @Universe!";
        const replacements: { [key: string]: string } = { "@World": "@Earth", "@Universe": "@Galaxy" };
        const expected: string = "Hello @Earth! Hello @Galaxy!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 4: Replace substrings with numbers
    it('4. should replace substrings with numbers', () => {
        const str: string = "Hello 123! Hello 456!";
        const replacements: { [key: string]: string } = { "123": "789", "456": "012" };
        const expected: string = "Hello 789! Hello 012!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 5: Replace substrings with mixed characters
    it('5. should replace substrings with mixed characters', () => {
        const str: string = "Hello a1@! Hello b2#!";
        const replacements: { [key: string]: string } = { "a1@": "c3$", "b2#": "d4%" };
        const expected: string = "Hello c3$! Hello d4%!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 6: Replace substrings with spaces
    it('6. should replace substrings with spaces', () => {
        const str: string = "Hello World! Hello Universe!";
        const replacements: { [key: string]: string } = { "Hello ": "Hi ", "World": "Earth" };
        const expected: string = "Hi Earth! Hi Universe!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 7: Replace substrings with leading spaces
    it('7. should replace substrings with leading spaces', () => {
        const str: string = " Hello World! Hello Universe!";
        const replacements: { [key: string]: string } = { " Hello": " Hi", "World": "Earth" };
        const expected: string = " Hi Earth! Hi Universe!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 8: Replace substrings with trailing spaces
    it('8. should replace substrings with trailing spaces', () => {
        const str: string = "Hello World ! Hello Universe !";
        const replacements: { [key: string]: string } = { "World ": "Earth ", "Universe ": "Galaxy " };
        const expected: string = "Hello Earth ! Hello Galaxy !";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 9: Replace substrings with newlines
    it('9. should replace substrings with newlines', () => {
        const str: string = "Hello\nWorld! Hello\nUniverse!";
        const replacements: { [key: string]: string } = { "Hello\n": "Hi\n", "World": "Earth" };
        const expected: string = "Hi\nEarth! Hi\nUniverse!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 10: Replace substrings with tabs
    it('10. should replace substrings with tabs', () => {
        const str: string = "Hello\tWorld! Hello\tUniverse!";
        const replacements: { [key: string]: string } = { "Hello\t": "Hi\t", "World": "Earth" };
        const expected: string = "Hi\tEarth! Hi\tUniverse!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 11: Replace substrings that do not exist
    it('11. should return the original string if the target substrings do not exist', () => {
        const str: string = "Hello World!";
        const replacements: { [key: string]: string } = { "Planet": "Earth", "Galaxy": "Universe" };
        const expected: string = "Hello World!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 12: Replace substrings with empty replacements
    it('12. should replace substrings with empty replacements', () => {
        const str: string = "Hello World! Hello Universe!";
        const replacements: { [key: string]: string } = { "Hello": "", "World": "" };
        const expected: string = " !  Universe!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 13: Replace substrings with overlapping replacements
    it('13. should replace substrings with overlapping replacements', () => {
        const str: string = "Hello World! Hello Universe!";
        const replacements: { [key: string]: string } = { "Hello": "Hi", "Hi": "Hey" };
        const expected: string = "Hey World! Hey Universe!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 14: Replace substrings with case-sensitive replacements
    it('14. should replace substrings with case-sensitive replacements', () => {
        const str: string = "Hello World! hello Universe!";
        const replacements: { [key: string]: string } = { "Hello": "Hi", "hello": "hey" };
        const expected: string = "Hi World! hey Universe!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });

    // Test case 15: Replace substrings with regex special characters
    it('15. should replace substrings with regex special characters', () => {
        const str: string = "Hello $World! Hello ^Universe!";
        const replacements: { [key: string]: string } = { "\\$World": "Earth", "\\^Universe": "Galaxy" };
        const expected: string = "Hello Earth! Hello Galaxy!";
        const result: string = replaceMultiple(str, replacements);
        expect(result).toBe(expected);
    });
});
