import { fibonacciRecursive } from './fibonacciRecursive';

describe('fibonacciRecursive', () => {
    // Test case 1: Fibonacci number for a positive integer
    it('1. should return the correct Fibonacci number for a positive integer', () => {
        const input: number = 5;
        const expected: number = 5;
        const result: number = fibonacciRecursive(input);
        expect(result).toBe(expected);
    });

    // Test case 2: Fibonacci number for zero
    it('2. should return 0 for the Fibonacci number of 0', () => {
        const input: number = 0;
        const expected: number = 0;
        const result: number = fibonacciRecursive(input);
        expect(result).toBe(expected);
    });

    // Test case 3: Fibonacci number for one
    it('3. should return 1 for the Fibonacci number of 1', () => {
        const input: number = 1;
        const expected: number = 1;
        const result: number = fibonacciRecursive(input);
        expect(result).toBe(expected);
    });

    // Test case 4: Fibonacci number for a negative integer
    it('4. should return -1 for a negative integer', () => {
        const input: number = -5;
        const expected: number = -1;
        const result: number = fibonacciRecursive(input);
        expect(result).toBe(expected);
    });

    // Test case 5: Fibonacci number for a large integer
    it('5. should return the correct Fibonacci number for a large integer', () => {
        const input: number = 20;
        const expected: number = 6765;
        const result: number = fibonacciRecursive(input);
        expect(result).toBe(expected);
    });

    // Test case 6: Exception handling for null input
    it('6. should throw an error for null input', () => {
        expect(() => fibonacciRecursive(null as any)).toThrow();
    });

    // Test case 7: Exception handling for undefined input
    it('7. should throw an error for undefined input', () => {
        expect(() => fibonacciRecursive(undefined as any)).toThrow();
    });

    // Test case 8: Exception handling for non-number input (string)
    it('8. should throw an error for non-number input (string)', () => {
        expect(() => fibonacciRecursive('string' as any)).toThrow();
    });

    // Test case 9: Exception handling for non-number input (object)
    it('9. should throw an error for non-number input (object)', () => {
        expect(() => fibonacciRecursive({} as any)).toThrow();
    });

    // Test case 10: Exception handling for non-number input (array)
    it('10. should throw an error for non-number input (array)', () => {
        expect(() => fibonacciRecursive([] as any)).toThrow();
    });

    // Test case 11: Exception handling for floating-point input
    it('11. should throw an error for floating-point input', () => {
        const input: number = 5.5;
        expect(() => fibonacciRecursive(input)).toThrow();
    });
});
