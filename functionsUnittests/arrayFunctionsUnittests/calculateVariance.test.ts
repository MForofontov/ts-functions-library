import { calculateVariance } from '../../arrayFunctions/calculateVariance';

describe('calculateVariance', () => {
    // Test case 1: Variance of an array of positive numbers
    it('1. should return the variance of an array of positive numbers', () => {
        expect(calculateVariance([1, 2, 3, 4, 5])).toBeCloseTo(2);
        expect(calculateVariance([10, 20, 30, 40, 50])).toBeCloseTo(200);
    });

    // Test case 2: Variance of an array of negative numbers
    it('2. should return the variance of an array of negative numbers', () => {
        expect(calculateVariance([-1, -2, -3, -4, -5])).toBeCloseTo(2);
        expect(calculateVariance([-10, -20, -30, -40, -50])).toBeCloseTo(200);
    });

    // Test case 3: Variance of an array of mixed positive and negative numbers
    it('3. should return the variance of an array of mixed positive and negative numbers', () => {
        expect(calculateVariance([-1, 0, 1, 2, 3])).toBeCloseTo(2.5);
        expect(calculateVariance([-10, 0, 10, 20, 30])).toBeCloseTo(250);
    });

    // Test case 4: Variance of an array with a single element
    it('4. should return 0 for an array with a single element', () => {
        expect(calculateVariance([5])).toBe(0);
        expect(calculateVariance([-5])).toBe(0);
    });

    // Test case 5: Variance of an empty array
    it('5. should return NaN for an empty array', () => {
        expect(calculateVariance([])).toBeNaN();
    });

    // Test case 6: Variance of an array with zero
    it('6. should handle arrays with zero', () => {
        expect(calculateVariance([0, 0, 0])).toBe(0);
        expect(calculateVariance([0, 1, 2, 3])).toBeCloseTo(1.25);
    });

    // Test case 7: Variance of an array with floating point numbers
    it('7. should handle arrays with floating point numbers', () => {
        expect(calculateVariance([1.5, 2.5, 3.5])).toBeCloseTo(0.6667);
        expect(calculateVariance([-1.5, -2.5, -3.5])).toBeCloseTo(0.6667);
    });

    // Test case 8: Variance of an array with large numbers
    it('8. should handle arrays with large numbers', () => {
        expect(calculateVariance([1000000000, 2000000000, 3000000000])).toBeCloseTo(6.6667e17);
        expect(calculateVariance([-1000000000, -2000000000, -3000000000])).toBeCloseTo(6.6667e17);
    });

    // Test case 9: Variance of an array with very small numbers
    it('9. should handle arrays with very small numbers', () => {
        expect(calculateVariance([0.0000001, 0.0000002, 0.0000003])).toBeCloseTo(6.6667e-15);
        expect(calculateVariance([-0.0000001, -0.0000002, -0.0000003])).toBeCloseTo(6.6667e-15);
    });

    // Test case 10: Variance of an array with mixed integers and floating point numbers
    it('10. should handle arrays with mixed integers and floating point numbers', () => {
        expect(calculateVariance([1, 2.5, 3])).toBeCloseTo(0.8333);
        expect(calculateVariance([-1, -2.5, -3])).toBeCloseTo(0.8333);
    });

    // Test case 11: Variance of an array with repeated numbers
    it('11. should handle arrays with repeated numbers', () => {
        expect(calculateVariance([5, 5, 5])).toBe(0);
        expect(calculateVariance([-5, -5, -5])).toBe(0);
    });

    // Test case 12: Variance of an array with NaN values
    it('12. should handle arrays with NaN values', () => {
        expect(calculateVariance([NaN, 1, 2])).toBeNaN();
        expect(calculateVariance([1, NaN, 2])).toBeNaN();
    });

    // Test case 13: Variance of an array with Infinity values
    it('13. should handle arrays with Infinity values', () => {
        expect(calculateVariance([Infinity, 1, 2])).toBeNaN();
        expect(calculateVariance([1, Infinity, 2])).toBeNaN();
    });

    // Test case 14: Variance of an array with -Infinity values
    it('14. should handle arrays with -Infinity values', () => {
        expect(calculateVariance([-Infinity, 1, 2])).toBeNaN();
        expect(calculateVariance([1, -Infinity, 2])).toBeNaN();
    });

    // Test case 15: Variance of an array with mixed Infinity and finite numbers
    it('15. should handle arrays with mixed Infinity and finite numbers', () => {
        expect(calculateVariance([Infinity, 1, 2])).toBeNaN();
        expect(calculateVariance([-Infinity, 1, 2])).toBeNaN();
    });

    // Test case 16: Variance of an array with mixed NaN and finite numbers
    it('16. should handle arrays with mixed NaN and finite numbers', () => {
        expect(calculateVariance([NaN, 1, 2])).toBeNaN();
        expect(calculateVariance([1, NaN, 2])).toBeNaN();
    });

    // Test case 17: Variance of an array with mixed NaN and Infinity values
    it('17. should handle arrays with mixed NaN and Infinity values', () => {
        expect(calculateVariance([NaN, Infinity, -Infinity])).toBeNaN();
        expect(calculateVariance([Infinity, NaN, -Infinity])).toBeNaN();
    });

    // Test case 18: Variance of an array with very large and very small numbers
    it('18. should handle arrays with very large and very small numbers', () => {
        expect(calculateVariance([1e10, 1e-10])).toBeCloseTo(2.5e19);
        expect(calculateVariance([-1e10, -1e-10])).toBeCloseTo(2.5e19);
    });

    // Test case 19: Variance of an array with mixed positive, negative, and zero numbers
    it('19. should handle arrays with mixed positive, negative, and zero numbers', () => {
        expect(calculateVariance([1, -1, 0])).toBeCloseTo(0.6667);
        expect(calculateVariance([-1, 0, 1])).toBeCloseTo(0.6667);
    });
});
