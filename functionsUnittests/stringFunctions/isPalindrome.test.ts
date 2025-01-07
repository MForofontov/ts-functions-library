import { isPalindrome } from '../../stringFunctions/isPalindrome';

/**
 * Unit tests for the isPalindrome function.
 */
describe('isPalindrome', () => {
    // Test case 1: Check if a simple palindrome returns true
    it('1. should return true for a simple palindrome', () => {
        const str: string = "madam";
        const expected: boolean = true;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Check if a non-palindrome returns false
    it('2. should return false for a non-palindrome', () => {
        const str: string = "hello";
        const expected: boolean = false;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Check if a palindrome with mixed case returns true
    it('3. should return true for a palindrome with mixed case', () => {
        const str: string = "MadAm";
        const expected: boolean = true;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Check if a palindrome with spaces returns true
    it('4. should return true for a palindrome with spaces', () => {
        const str: string = "A man a plan a canal Panama";
        const expected: boolean = true;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Check if a palindrome with punctuation returns true
    it('5. should return true for a palindrome with punctuation', () => {
        const str: string = "A man, a plan, a canal, Panama!";
        const expected: boolean = true;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Check if an empty string returns true
    it('6. should return true for an empty string', () => {
        const str: string = "";
        const expected: boolean = true;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Check if a single character string returns true
    it('7. should return true for a single character string', () => {
        const str: string = "a";
        const expected: boolean = true;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Check if a palindrome with numbers returns true
    it('8. should return true for a palindrome with numbers', () => {
        const str: string = "12321";
        const expected: boolean = true;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Check if a non-palindrome with numbers returns false
    it('9. should return false for a non-palindrome with numbers', () => {
        const str: string = "12345";
        const expected: boolean = false;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Check if a palindrome with special characters returns true
    it('10. should return true for a palindrome with special characters', () => {
        const str: string = "A man, a plan, a canal, Panama!";
        const expected: boolean = true;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Check if a palindrome with mixed case and spaces returns true
    it('11. should return true for a palindrome with mixed case and spaces', () => {
        const str: string = "A Santa at NASA";
        const expected: boolean = true;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 12: Check if a palindrome with mixed case, spaces, and punctuation returns true
    it('12. should return true for a palindrome with mixed case, spaces, and punctuation', () => {
        const str: string = "A Santa, at NASA!";
        const expected: boolean = true;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });

    // Test case 13: Check if a non-palindrome with mixed case, spaces, and punctuation returns false
    it('13. should return false for a non-palindrome with mixed case, spaces, and punctuation', () => {
        const str: string = "Hello, World!";
        const expected: boolean = false;
        const result: boolean = isPalindrome(str);
        expect(result).toBe(expected);
    });
});