import { repeatUntilLength } from '../../stringFunctions/repeatUntilLength';

/**
 * Unit tests for the repeatUntilLength function.
 */
describe('repeatUntilLength', () => {
    // Test case 1: Repeat a string until it reaches a length of 10
    it('1. should repeat a string until it reaches a length of 10', () => {
        const str: string = "abc";
        const length: number = 10;
        const expected: string = "abcabcabca";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 2: Repeat a string until it reaches a length of 0
    it('2. should return an empty string when the desired length is 0', () => {
        const str: string = "abc";
        const length: number = 0;
        const expected: string = "";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 3: Repeat a string until it reaches a length of 1
    it('3. should repeat a string until it reaches a length of 1', () => {
        const str: string = "abc";
        const length: number = 1;
        const expected: string = "a";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 4: Repeat a string until it reaches a length of 5
    it('4. should repeat a string until it reaches a length of 5', () => {
        const str: string = "abc";
        const length: number = 5;
        const expected: string = "abcab";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 5: Repeat an empty string until it reaches a length of 5
    it('5. should return an empty string when repeating an empty string to any length', () => {
        const str: string = "";
        const length: number = 5;
        const expected: string = "";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 6: Repeat a string with special characters until it reaches a length of 8
    it('6. should repeat a string with special characters until it reaches a length of 8', () => {
        const str: string = "@#";
        const length: number = 8;
        const expected: string = "@#@#@#@#";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 7: Repeat a string with numbers until it reaches a length of 7
    it('7. should repeat a string with numbers until it reaches a length of 7', () => {
        const str: string = "123";
        const length: number = 7;
        const expected: string = "1231231";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 8: Repeat a string with mixed characters until it reaches a length of 12
    it('8. should repeat a string with mixed characters until it reaches a length of 12', () => {
        const str: string = "a1@";
        const length: number = 12;
        const expected: string = "a1@a1@a1@a1@";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 9: Repeat a string with spaces until it reaches a length of 10
    it('9. should repeat a string with spaces until it reaches a length of 10', () => {
        const str: string = "abc ";
        const length: number = 10;
        const expected: string = "abc abc ab";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 10: Repeat a string with leading spaces until it reaches a length of 10
    it('10. should repeat a string with leading spaces until it reaches a length of 10', () => {
        const str: string = " abc";
        const length: number = 10;
        const expected: string = " abc abc ab";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 11: Repeat a string with trailing spaces until it reaches a length of 10
    it('11. should repeat a string with trailing spaces until it reaches a length of 10', () => {
        const str: string = "abc ";
        const length: number = 10;
        const expected: string = "abc abc ab";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 12: Repeat a string with newlines until it reaches a length of 10
    it('12. should repeat a string with newlines until it reaches a length of 10', () => {
        const str: string = "abc\n";
        const length: number = 10;
        const expected: string = "abc\nabc\nab";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });

    // Test case 13: Repeat a string with tabs until it reaches a length of 10
    it('13. should repeat a string with tabs until it reaches a length of 10', () => {
        const str: string = "abc\t";
        const length: number = 10;
        const expected: string = "abc\tabc\tab";
        const result: string = repeatUntilLength(str, length);
        expect(result).toBe(expected);
    });
});
