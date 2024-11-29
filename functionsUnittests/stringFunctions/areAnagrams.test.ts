import { areAnagrams } from '../../stringFunctions/areAnagrams';

/**
 * Unit tests for the areAnagrams function.
 */
describe('areAnagrams', () => {
    // Test case 1: Check if two anagram strings are recognized as anagrams
    it('1. should return true for two anagram strings', () => {
        const str1: string = "listen";
        const str2: string = "silent";
        const expected: boolean = true;
        const result: boolean = areAnagrams(str1, str2);
        expect(result).toBe(expected);
    });

    // Test case 2: Check if two non-anagram strings are not recognized as anagrams
    it('2. should return false for two non-anagram strings', () => {
        const str1: string = "hello";
        const str2: string = "world";
        const expected: boolean = false;
        const result: boolean = areAnagrams(str1, str2);
        expect(result).toBe(expected);
    });

    // Test case 3: Check if two anagram strings with different cases are recognized as anagrams
    it('3. should return true for two anagram strings with different cases', () => {
        const str1: string = "Listen";
        const str2: string = "Silent";
        const expected: boolean = true;
        const result: boolean = areAnagrams(str1, str2);
        expect(result).toBe(expected);
    });

    // Test case 4: Check if two anagram strings with spaces are recognized as anagrams
    it('4. should return true for two anagram strings with spaces', () => {
        const str1: string = "conversation";
        const str2: string = "voices rant on";
        const expected: boolean = true;
        const result: boolean = areAnagrams(str1, str2);
        expect(result).toBe(expected);
    });

    // Test case 5: Check if two empty strings are recognized as anagrams
    it('5. should return true for two empty strings', () => {
        const str1: string = "";
        const str2: string = "";
        const expected: boolean = true;
        const result: boolean = areAnagrams(str1, str2);
        expect(result).toBe(expected);
    });

    // Test case 6: Check if two strings with different lengths are not recognized as anagrams
    it('6. should return false for two strings with different lengths', () => {
        const str1: string = "abc";
        const str2: string = "abcd";
        const expected: boolean = false;
        const result: boolean = areAnagrams(str1, str2);
        expect(result).toBe(expected);
    });
});
