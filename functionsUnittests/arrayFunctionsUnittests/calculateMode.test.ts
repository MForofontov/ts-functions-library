import { calculateMode } from '../../arrayFunctions/calculateMode';

describe('calculateMode', () => {
    // Test case 1: Mode(s) of an array of numbers
    it('1. should return the mode(s) of an array of numbers', () => {
        expect(calculateMode([1, 2, 3, 4, 5, 1, 2, 3, 1, 2])).toEqual([1, 2]);
        expect(calculateMode([1, 1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3]);
        expect(calculateMode([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    // Test case 2: Empty input array
    it('2. should return an empty array for an empty input array', () => {
        expect(calculateMode([])).toEqual([]);
    });

    // Test case 3: Single element array
    it('3. should handle arrays with a single element', () => {
        expect(calculateMode([5])).toEqual([5]);
    });

    // Test case 4: All identical elements
    it('4. should handle arrays with all identical elements', () => {
        expect(calculateMode([2, 2, 2, 2])).toEqual([2]);
    });

    // Test case 5: Arrays with negative numbers
    it('5. should handle arrays with negative numbers', () => {
        expect(calculateMode([-1, -1, -2, -2, -3])).toEqual([-1, -2]);
    });

    // Test case 6: Arrays with floating point numbers
    it('6. should handle arrays with floating point numbers', () => {
        expect(calculateMode([1.1, 2.2, 3.3, 1.1, 2.2, 1.1])).toEqual([1.1]);
    });

    // Test case 7: Arrays with mixed positive and negative numbers
    it('7. should handle arrays with mixed positive and negative numbers', () => {
        expect(calculateMode([-1, 1, -1, 1, 2])).toEqual([-1, 1]);
    });

    // Test case 8: Arrays with zero
    it('8. should handle arrays with zero', () => {
        expect(calculateMode([0, 0, 1, 1, 2])).toEqual([0, 1]);
    });

    // Test case 9: Arrays with large numbers
    it('9. should handle arrays with large numbers', () => {
        expect(calculateMode([1000000000, 2000000000, 1000000000])).toEqual([1000000000]);
    });

    // Test case 10: Arrays with very small numbers
    it('10. should handle arrays with very small numbers', () => {
        expect(calculateMode([0.0000001, 0.0000002, 0.0000001])).toEqual([0.0000001]);
    });

    // Test case 11: Arrays with mixed integers and floating point numbers
    it('11. should handle arrays with mixed integers and floating point numbers', () => {
        expect(calculateMode([1, 2.5, 3, 2.5, 1])).toEqual([1, 2.5]);
    });

    // Test case 12: Arrays with repeated numbers
    it('12. should handle arrays with repeated numbers', () => {
        expect(calculateMode([5, 5, 5, 5])).toEqual([5]);
    });

    // Test case 13: Arrays with NaN values
    it('13. should handle arrays with NaN values', () => {
        expect(calculateMode([NaN, NaN, 1, 1])).toEqual([NaN, 1]);
    });

    // Test case 14: Arrays with Infinity values
    it('14. should handle arrays with Infinity values', () => {
        expect(calculateMode([Infinity, Infinity, 1, 1])).toEqual([Infinity, 1]);
    });

    // Test case 15: Arrays with -Infinity values
    it('15. should handle arrays with -Infinity values', () => {
        expect(calculateMode([-Infinity, -Infinity, 1, 1])).toEqual([-Infinity, 1]);
    });

    // Test case 16: Arrays with mixed Infinity and finite numbers
    it('16. should handle arrays with mixed Infinity and finite numbers', () => {
        expect(calculateMode([Infinity, 1, 2, Infinity])).toEqual([Infinity]);
    });

    // Test case 17: Arrays with mixed -Infinity and finite numbers
    it('17. should handle arrays with mixed -Infinity and finite numbers', () => {
        expect(calculateMode([-Infinity, 1, 2, -Infinity])).toEqual([-Infinity]);
    });

    // Test case 18: Arrays with mixed NaN and finite numbers
    it('18. should handle arrays with mixed NaN and finite numbers', () => {
        expect(calculateMode([NaN, 1, 2, NaN])).toEqual([NaN]);
    });

    // Test case 19: Arrays with mixed NaN and Infinity values
    it('19. should handle arrays with mixed NaN and Infinity values', () => {
        expect(calculateMode([NaN, Infinity, NaN])).toEqual([NaN]);
    });

    // Test case 20: Arrays with very large and very small numbers
    it('20. should handle arrays with very large and very small numbers', () => {
        expect(calculateMode([1e10, 1e-10, 1e10])).toEqual([1e10]);
    });

    // Test case 21: Arrays with mixed positive, negative, and zero numbers
    it('21. should handle arrays with mixed positive, negative, and zero numbers', () => {
        expect(calculateMode([1, -1, 0, 1, -1])).toEqual([1, -1]);
    });
});
