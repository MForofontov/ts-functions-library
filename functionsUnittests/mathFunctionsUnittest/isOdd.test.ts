import { isOdd } from '../../mathFunctions/isOdd';

describe('isOdd', () => {
    // Test case 1: Check if a positive odd number is odd
    it('1. should return true for a positive odd number', () => {
        const input: number = 3;
        const result: boolean = isOdd(input);
        expect(result).toBe(true);
    });

    // Test case 2: Check if a positive even number is odd
    it('2. should return false for a positive even number', () => {
        const input: number = 4;
        const result: boolean = isOdd(input);
        expect(result).toBe(false);
    });

    // Test case 3: Check if zero is odd
    it('3. should return false for zero', () => {
        const input: number = 0;
        const result: boolean = isOdd(input);
        expect(result).toBe(false);
    });

    // Test case 4: Check if a negative odd number is odd
    it('4. should return true for a negative odd number', () => {
        const input: number = -3;
        const result: boolean = isOdd(input);
        expect(result).toBe(true);
    });

    // Test case 5: Check if a negative even number is odd
    it('5. should return false for a negative even number', () => {
        const input: number = -4;
        const result: boolean = isOdd(input);
        expect(result).toBe(false);
    });

    // Test case 6: Check if a large odd number is odd
    it('6. should return true for a large odd number', () => {
        const input: number = 1000001;
        const result: boolean = isOdd(input);
        expect(result).toBe(true);
    });

    // Test case 7: Check if a large even number is odd
    it('7. should return false for a large even number', () => {
        const input: number = 1000000;
        const result: boolean = isOdd(input);
        expect(result).toBe(false);
    });
});
