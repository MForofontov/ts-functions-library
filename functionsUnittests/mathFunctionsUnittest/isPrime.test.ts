import { isPrime } from '../../mathFunctions/isPrime';

describe('isPrime', () => {
    // Test case 1: Check if a small prime number is identified correctly
    it('1. should return true for a small prime number', () => {
        const input: number = 7;
        const result: boolean = isPrime(input);
        expect(result).toBe(true);
    });

    // Test case 2: Check if a small non-prime number is identified correctly
    it('2. should return false for a small non-prime number', () => {
        const input: number = 10;
        const result: boolean = isPrime(input);
        expect(result).toBe(false);
    });

    // Test case 3: Check if a large prime number is identified correctly
    it('3. should return true for a large prime number', () => {
        const input: number = 104729; // 10000th prime number
        const result: boolean = isPrime(input);
        expect(result).toBe(true);
    });

    // Test case 4: Check if a large non-prime number is identified correctly
    it('4. should return false for a large non-prime number', () => {
        const input: number = 104728;
        const result: boolean = isPrime(input);
        expect(result).toBe(false);
    });

    // Test case 5: Check if zero is identified correctly
    it('5. should return false for zero', () => {
        const input: number = 0;
        const result: boolean = isPrime(input);
        expect(result).toBe(false);
    });

    // Test case 6: Check if one is identified correctly
    it('6. should return false for one', () => {
        const input: number = 1;
        const result: boolean = isPrime(input);
        expect(result).toBe(false);
    });

    // Test case 7: Check if a negative number is identified correctly
    it('7. should return false for a negative number', () => {
        const input: number = -7;
        const result: boolean = isPrime(input);
        expect(result).toBe(false);
    });

    // Test case 8: Check if a floating-point number is identified correctly
    it('16. should return false for a floating-point number', () => {
        const input: number = 7.5;
        const result: boolean = isPrime(input);
        expect(result).toBe(false);
    });
});
