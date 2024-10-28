import { calculateCubeRoot } from '../../mathFunctions/calculateCubeRoot';

describe('calculateCubeRoot', () => {
    // Test case 1: Positive integer
    it('1. should return the correct cube root for a positive integer', () => {
        const input: number = 27;
        const expected: number = 3;
        const result: number = calculateCubeRoot(input);
        expect(result).toBe(expected);
    });

    // Test case 2: Negative integer
    it('2. should return the correct cube root for a negative integer', () => {
        const input: number = -27;
        const expected: number = -3;
        const result: number = calculateCubeRoot(input);
        expect(result).toBe(expected);
    });

    // Test case 3: Zero
    it('3. should return 0 for an input of 0', () => {
        const input: number = 0;
        const expected: number = 0;
        const result: number = calculateCubeRoot(input);
        expect(result).toBe(expected);
    });

    // Test case 4: Positive decimal
    it('4. should return the correct cube root for a positive decimal', () => {
        const input: number = 8.125;
        const expected: number = 2;
        const result: number = calculateCubeRoot(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 5: Negative decimal
    it('5. should return the correct cube root for a negative decimal', () => {
        const input: number = -8.125;
        const expected: number = -2;
        const result: number = calculateCubeRoot(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 6: Small positive number
    it('6. should return the correct cube root for a small positive number', () => {
        const input: number = 0.001;
        const expected: number = 0.1;
        const result: number = calculateCubeRoot(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 7: Small negative number
    it('7. should return the correct cube root for a small negative number', () => {
        const input: number = -0.001;
        const expected: number = -0.1;
        const result: number = calculateCubeRoot(input);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 8: Large positive number
    it('8. should return the correct cube root for a large positive number', () => {
        const input: number = 1000000;
        const expected: number = 100;
        const result: number = calculateCubeRoot(input);
        expect(result).toBe(expected);
    });

    // Test case 9: Large negative number
    it('9. should return the correct cube root for a large negative number', () => {
        const input: number = -1000000;
        const expected: number = -100;
        const result: number = calculateCubeRoot(input);
        expect(result).toBe(expected);
    });

    // Test case 10: NaN
    it('10. should return NaN for an input of NaN', () => {
        const input: number = NaN;
        const result: number = calculateCubeRoot(input);
        expect(result).toBeNaN();
    });

    // Test case 11: Positive Infinity
    it('11. should return Infinity for an input of Infinity', () => {
        const input: number = Infinity;
        const expected: number = Infinity;
        const result: number = calculateCubeRoot(input);
        expect(result).toBe(expected);
    });

    // Test case 12: Negative Infinity
    it('12. should return -Infinity for an input of -Infinity', () => {
        const input: number = -Infinity;
        const expected: number = -Infinity;
        const result: number = calculateCubeRoot(input);
        expect(result).toBe(expected);
    });
});
