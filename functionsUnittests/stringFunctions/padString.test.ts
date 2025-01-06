import { padString } from '../../stringFunctions/padString';

/**
 * Unit tests for the padString function.
 */
describe('padString', () => {
    // Test case 1: Pad a string with asterisks to a target length of 10
    it('1. should pad a string with asterisks to a target length of 10', () => {
        const str: string = "test";
        const targetLength: number = 10;
        const padStr: string = "*";
        const expected: string = "******test";
        const result: string = padString(str, targetLength, padStr);
        expect(result).toBe(expected);
    });

    // Test case 2: Pad a string with spaces to a target length of 10
    it('2. should pad a string with spaces to a target length of 10', () => {
        const str: string = "test";
        const targetLength: number = 10;
        const expected: string = "      test";
        const result: string = padString(str, targetLength);
        expect(result).toBe(expected);
    });

    // Test case 3: Pad a string with a longer pad string to a target length of 10
    it('3. should pad a string with a longer pad string to a target length of 10', () => {
        const str: string = "test";
        const targetLength: number = 10;
        const padStr: string = "abc";
        const expected: string = "abcabctest";
        const result: string = padString(str, targetLength, padStr);
        expect(result).toBe(expected);
    });

    // Test case 4: Pad a string with a target length less than the string length
    it('4. should return the original string if target length is less than the string length', () => {
        const str: string = "test";
        const targetLength: number = 2;
        const expected: string = "test";
        const result: string = padString(str, targetLength);
        expect(result).toBe(expected);
    });

    // Test case 5: Pad a string with an empty pad string
    it('5. should return the original string if pad string is empty', () => {
        const str: string = "test";
        const targetLength: number = 10;
        const padStr: string = "";
        const expected: string = "test";
        const result: string = padString(str, targetLength, padStr);
        expect(result).toBe(expected);
    });

    // Test case 6: Pad a string with a target length equal to the string length
    it('6. should return the original string if target length is equal to the string length', () => {
        const str: string = "test";
        const targetLength: number = 4;
        const expected: string = "test";
        const result: string = padString(str, targetLength);
        expect(result).toBe(expected);
    });

    // Test case 7: Pad an empty string to a target length of 5
    it('7. should pad an empty string to a target length of 5', () => {
        const str: string = "";
        const targetLength: number = 5;
        const padStr: string = "*";
        const expected: string = "*****";
        const result: string = padString(str, targetLength, padStr);
        expect(result).toBe(expected);
    });

    // Test case 8: Pad a string with spaces to a target length of 5
    it('8. should pad a string with spaces to a target length of 5', () => {
        const str: string = "a";
        const targetLength: number = 5;
        const expected: string = "    a";
        const result: string = padString(str, targetLength);
        expect(result).toBe(expected);
    });

    // Test case 9: Pad a string with special characters to a target length of 8
    it('9. should pad a string with special characters to a target length of 8', () => {
        const str: string = "test";
        const targetLength: number = 8;
        const padStr: string = "@#";
        const expected: string = "@#@#test";
        const result: string = padString(str, targetLength, padStr);
        expect(result).toBe(expected);
    });

    // Test case 10: Pad a string with numbers to a target length of 7
    it('10. should pad a string with numbers to a target length of 7', () => {
        const str: string = "test";
        const targetLength: number = 7;
        const padStr: string = "123";
        const expected: string = "123test";
        const result: string = padString(str, targetLength, padStr);
        expect(result).toBe(expected);
    });

    // Test case 11: Pad a string with mixed characters to a target length of 12
    it('11. should pad a string with mixed characters to a target length of 12', () => {
        const str: string = "test";
        const targetLength: number = 12;
        const padStr: string = "abc123";
        const expected: string = "abc123abctest";
        const result: string = padString(str, targetLength, padStr);
        expect(result).toBe(expected);
    });

    // Test case 12: Pad a string with a single character pad string to a target length of 6
    it('12. should pad a string with a single character pad string to a target length of 6', () => {
        const str: string = "test";
        const targetLength: number = 6;
        const padStr: string = "x";
        const expected: string = "xxtest";
        const result: string = padString(str, targetLength, padStr);
        expect(result).toBe(expected);
    });

    // Test case 13: Pad a string with a multi-character pad string to a target length of 9
    it('13. should pad a string with a multi-character pad string to a target length of 9', () => {
        const str: string = "test";
        const targetLength: number = 9;
        const padStr: string = "xyz";
        const expected: string = "xyzxytest";
        const result: string = padString(str, targetLength, padStr);
        expect(result).toBe(expected);
    });
});
