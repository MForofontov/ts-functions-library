import { calculateMedian } from '../../arrayFunctions/calculateMedian';

describe('calculateMedian', () => {
    // Test case 1: Median of an odd-length array
    it('1. should return the median of an odd-length array', () => {
        expect(calculateMedian([3, 1, 4, 1, 5, 9, 2])).toBe(3);
        expect(calculateMedian([1, 2, 3, 4, 5])).toBe(3);
    });

    // Test case 2: Median of an even-length array
    it('2. should return the median of an even-length array', () => {
        expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
        expect(calculateMedian([3, 1, 4, 2])).toBe(2.5);
    });

    // Test case 3: Single-element array
    it('3. should return the only element for a single-element array', () => {
        expect(calculateMedian([42])).toBe(42);
    });

    // Test case 4: Empty array
    it('4. should return NaN for an empty array', () => {
        expect(calculateMedian([])).toBeNaN();
    });

    // Test case 5: Arrays with negative numbers
    it('5. should handle arrays with negative numbers', () => {
        expect(calculateMedian([-5, -1, -3, -2, -4])).toBe(-3);
    });

    // Test case 6: Arrays with duplicate numbers
    it('6. should handle arrays with duplicate numbers', () => {
        expect(calculateMedian([1, 2, 2, 3, 4])).toBe(2);
    });

    // Test case 7: Arrays with floating point numbers
    it('7. should handle arrays with floating point numbers', () => {
        expect(calculateMedian([1.5, 2.5, 3.5, 4.5, 5.5])).toBe(3.5);
        expect(calculateMedian([1.1, 2.2, 3.3, 4.4])).toBe(2.75);
    });

    // Test case 8: Arrays with mixed positive and negative numbers
    it('8. should handle arrays with mixed positive and negative numbers', () => {
        expect(calculateMedian([-1, -2, 3, 4])).toBe(1);
        expect(calculateMedian([-3, -1, 2, 4, 5])).toBe(2);
    });

    // Test case 9: Arrays with zero
    it('9. should handle arrays with zero', () => {
        expect(calculateMedian([0, 0, 0])).toBe(0);
        expect(calculateMedian([0, 1, 2, 3, 4])).toBe(2);
    });

    // Test case 10: Arrays with large numbers
    it('10. should handle arrays with large numbers', () => {
        expect(calculateMedian([1000000000, 2000000000, 3000000000])).toBe(2000000000);
        expect(calculateMedian([1000000000, 2000000000, 3000000000, 4000000000])).toBe(2500000000);
    });

    // Test case 11: Arrays with very small numbers
    it('11. should handle arrays with very small numbers', () => {
        expect(calculateMedian([0.0000001, 0.0000002, 0.0000003])).toBe(0.0000002);
        expect(calculateMedian([0.0000001, 0.0000002, 0.0000003, 0.0000004])).toBe(0.00000025);
    });

    // Test case 12: Arrays with mixed integers and floating point numbers
    it('12. should handle arrays with mixed integers and floating point numbers', () => {
        expect(calculateMedian([1, 2.5, 3, 4.5, 5])).toBe(3);
        expect(calculateMedian([1, 2.5, 3, 4.5])).toBe(2.75);
    });

    // Test case 13: Arrays with repeated numbers
    it('13. should handle arrays with repeated numbers', () => {
        expect(calculateMedian([5, 5, 5])).toBe(5);
        expect(calculateMedian([1, 1, 2, 2, 3, 3])).toBe(2);
    });

    // Test case 14: Arrays with NaN values
    it('14. should handle arrays with NaN values', () => {
        expect(calculateMedian([NaN, NaN, NaN])).toBeNaN();
        expect(calculateMedian([1, NaN, 3])).toBeNaN();
    });

    // Test case 15: Arrays with Infinity values
    it('15. should handle arrays with Infinity values', () => {
        expect(calculateMedian([Infinity, Infinity, Infinity])).toBe(Infinity);
        expect(calculateMedian([1, Infinity, 3])).toBe(3);
    });

    // Test case 16: Arrays with -Infinity values
    it('16. should handle arrays with -Infinity values', () => {
        expect(calculateMedian([-Infinity, -Infinity, -Infinity])).toBe(-Infinity);
        expect(calculateMedian([1, -Infinity, 3])).toBe(1);
    });

    // Test case 17: Arrays with mixed Infinity and finite numbers
    it('17. should handle arrays with mixed Infinity and finite numbers', () => {
        expect(calculateMedian([Infinity, 1, 2])).toBe(2);
        expect(calculateMedian([-Infinity, 1, 2])).toBe(1);
    });

    // Test case 18: Arrays with mixed -Infinity and finite numbers
    it('18. should handle arrays with mixed -Infinity and finite numbers', () => {
        expect(calculateMedian([-Infinity, 1, 2])).toBe(1);
        expect(calculateMedian([-Infinity, -1, 0])).toBe(-1);
    });

    // Test case 19: Arrays with mixed NaN and finite numbers
    it('19. should handle arrays with mixed NaN and finite numbers', () => {
        expect(calculateMedian([NaN, 1, 2])).toBeNaN();
        expect(calculateMedian([1, NaN, 3])).toBeNaN();
    });

    // Test case 20: Arrays with mixed NaN and Infinity values
    it('20. should handle arrays with mixed NaN and Infinity values', () => {
        expect(calculateMedian([NaN, Infinity, -Infinity])).toBeNaN();
        expect(calculateMedian([Infinity, NaN, -Infinity])).toBeNaN();
    });

    // Test case 21: Arrays with very large and very small numbers
    it('21. should handle arrays with very large and very small numbers', () => {
        expect(calculateMedian([1e10, 1e-10])).toBeCloseTo(5e9);
        expect(calculateMedian([1e-10, 1e10, 1e-10])).toBe(1e-10);
    });

    // Test case 22: Arrays with mixed positive, negative, and zero numbers
    it('22. should handle arrays with mixed positive, negative, and zero numbers', () => {
        expect(calculateMedian([1, -1, 0])).toBe(0);
        expect(calculateMedian([-1, 0, 1])).toBe(0);
    });
});