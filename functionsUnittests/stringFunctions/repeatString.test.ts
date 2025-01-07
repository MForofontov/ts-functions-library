import { repeatString } from '../../stringFunctions/repeatString';

/**
 * Unit tests for the repeatString function.
 */
describe('repeatString', () => {
    // Test case 1: Repeat a string 3 times
    it('1. should repeat a string 3 times', () => {
        const str: string = "hello";
        const count: number = 3;
        const expected: string = "hellohellohello";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 2: Repeat a string 0 times
    it('2. should return an empty string when repeating a string 0 times', () => {
        const str: string = "hello";
        const count: number = 0;
        const expected: string = "";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 3: Repeat a string 1 time
    it('3. should return the original string when repeating a string 1 time', () => {
        const str: string = "hello";
        const count: number = 1;
        const expected: string = "hello";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 4: Repeat an empty string 5 times
    it('4. should return an empty string when repeating an empty string 5 times', () => {
        const str: string = "";
        const count: number = 5;
        const expected: string = "";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 5: Repeat a string with special characters 2 times
    it('5. should repeat a string with special characters 2 times', () => {
        const str: string = "@#";
        const count: number = 2;
        const expected: string = "@#@#";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 6: Repeat a string with numbers 4 times
    it('6. should repeat a string with numbers 4 times', () => {
        const str: string = "123";
        const count: number = 4;
        const expected: string = "123123123123";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 7: Repeat a string with mixed characters 3 times
    it('7. should repeat a string with mixed characters 3 times', () => {
        const str: string = "a1@";
        const count: number = 3;
        const expected: string = "a1@a1@a1@";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 8: Repeat a string with spaces 2 times
    it('8. should repeat a string with spaces 2 times', () => {
        const str: string = "hello world ";
        const count: number = 2;
        const expected: string = "hello world hello world ";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 9: Repeat a string with leading spaces 3 times
    it('9. should repeat a string with leading spaces 3 times', () => {
        const str: string = " hello";
        const count: number = 3;
        const expected: string = " hello hello hello";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 10: Repeat a string with trailing spaces 3 times
    it('10. should repeat a string with trailing spaces 3 times', () => {
        const str: string = "hello ";
        const count: number = 3;
        const expected: string = "hello hello hello ";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 11: Repeat a string with both leading and trailing spaces 2 times
    it('11. should repeat a string with both leading and trailing spaces 2 times', () => {
        const str: string = " hello ";
        const count: number = 2;
        const expected: string = " hello  hello ";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 12: Repeat a string with newlines 2 times
    it('12. should repeat a string with newlines 2 times', () => {
        const str: string = "hello\n";
        const count: number = 2;
        const expected: string = "hello\nhello\n";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 13: Repeat a string with tabs 3 times
    it('13. should repeat a string with tabs 3 times', () => {
        const str: string = "hello\t";
        const count: number = 3;
        const expected: string = "hello\thello\thello\t";
        const result: string = repeatString(str, count);
        expect(result).toBe(expected);
    });

    // Test case 14: Throw an error if count is NaN
    it('14. should throw an error if count is NaN', () => {
        const str: string = "hello";
        expect(() => repeatString(str, NaN)).toThrow("Count must be a number");
    });

    // Test case 15: Throw an error if count is negative
    it('15. should throw an error if count is negative', () => {
        const str: string = "hello";
        const count: number = -1;
        expect(() => repeatString(str, count)).toThrow("Count must be non-negative");
    });
});
