import { calculateFactorial } from '../../mathFunctions/calculateFactorial';

describe('calculateFactorial', () => {
    // Test case 1: Factorial of 0
    it('1. should return 1 for an input of 0', () => {
        const input: number = 0;
        const expected: number = 1;
        const result: number = calculateFactorial(input);
        expect(result).toBe(expected);
    });

    // Test case 2: Factorial of 1
    it('2. should return 1 for an input of 1', () => {
        const input: number = 1;
        const expected: number = 1;
        const result: number = calculateFactorial(input);
        expect(result).toBe(expected);
    });

    // Test case 3: Factorial of a positive integer
    it('3. should return the correct factorial for a positive integer', () => {
        const input: number = 5;
        const expected: number = 120;
        const result: number = calculateFactorial(input);
        expect(result).toBe(expected);
    });

    // Test case 4: Factorial of a larger positive integer
    it('4. should return the correct factorial for a larger positive integer', () => {
        const input: number = 10;
        const expected: number = 3628800;
        const result: number = calculateFactorial(input);
        expect(result).toBe(expected);
    });

    // Test case 5: Factorial of a negative number
    it('5. should throw an error for a negative number', () => {
        const input: number = -5;
        expect(() => calculateFactorial(input)).toThrow("Factorial is not defined for negative numbers");
    });

    // Test case 6: Factorial of a large number
    it('6. should return the correct factorial for a large number', () => {
        const input: number = 20;
        const expected: number = 2432902008176640000;
        const result: number = calculateFactorial(input);
        expect(result).toBe(expected);
    });

    // Test case 7: Factorial of a floating-point number
    it('7. should throw an error for a floating-point number', () => {
        const input: number = 5.5;
        expect(() => calculateFactorial(input)).toThrow("Factorial is not defined for floating-point numbers");
    });

    // Test case 8: Factorial of a very large number
    it('8. should handle very large numbers gracefully', () => {
        const input: number = 100;
        const result: number = calculateFactorial(input);
        expect(result).toBeGreaterThan(0); // Just checking that it doesn't crash
    });
});
