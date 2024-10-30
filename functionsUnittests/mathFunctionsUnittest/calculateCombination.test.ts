import { calculateCombination } from '../../mathFunctions/calculateCombination';

describe('calculateCombination', () => {
    // Test case 1: Typical case
    it('1. should return the correct combination for n = 5 and k = 2', () => {
        const n: number = 5;
        const k: number = 2;
        const expected: number = 10;
        const result: number = calculateCombination(n, k);
        expect(result).toBe(expected);
    });

    // Test case 2: k = 0
    it('2. should return 1 when k = 0', () => {
        const n: number = 5;
        const k: number = 0;
        const expected: number = 1;
        const result: number = calculateCombination(n, k);
        expect(result).toBe(expected);
    });

    // Test case 3: k = n
    it('3. should return 1 when k = n', () => {
        const n: number = 5;
        const k: number = 5;
        const expected: number = 1;
        const result: number = calculateCombination(n, k);
        expect(result).toBe(expected);
    });

    // Test case 4: k > n
    it('4. should return 0 when k > n', () => {
        const n: number = 5;
        const k: number = 6;
        const expected: number = 0;
        const result: number = calculateCombination(n, k);
        expect(result).toBe(expected);
    });

    // Test case 5: n = 0
    it('5. should return 0 when n = 0 and k > 0', () => {
        const n: number = 0;
        const k: number = 1;
        const expected: number = 0;
        const result: number = calculateCombination(n, k);
        expect(result).toBe(expected);
    });

    // Test case 6: n = 0 and k = 0
    it('6. should return 1 when n = 0 and k = 0', () => {
        const n: number = 0;
        const k: number = 0;
        const expected: number = 1;
        const result: number = calculateCombination(n, k);
        expect(result).toBe(expected);
    });

    // Test case 7: Large values of n and k
    it('7. should return the correct combination for large values of n and k', () => {
        const n: number = 20;
        const k: number = 10;
        const expected: number = 184756;
        const result: number = calculateCombination(n, k);
        expect(result).toBe(expected);
    });

    // Test case 8: k = 1
    it('8. should return n when k = 1', () => {
        const n: number = 5;
        const k: number = 1;
        const expected: number = 5;
        const result: number = calculateCombination(n, k);
        expect(result).toBe(expected);
    });

    // Test case 9: k = n - 1
    it('9. should return n when k = n - 1', () => {
        const n: number = 5;
        const k: number = 4;
        const expected: number = 5;
        const result: number = calculateCombination(n, k);
        expect(result).toBe(expected);
    });

    // Test case 10: Negative values of n or k
    it('10. should return 0 for negative values of n or k', () => {
        const n: number = -5;
        const k: number = 2;
        const expected: number = 0;
        const result: number = calculateCombination(n, k);
        expect(result).toBe(expected);
    });

    // Test case 11: Non-integer values of n or k
    it('11. should return NaN for non-integer values of n or k', () => {
        const n: number = 5.5;
        const k: number = 2;
        const result: number = calculateCombination(n, k);
        expect(result).toBeNaN();
    });
});
