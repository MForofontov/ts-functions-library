import { calculateMedian } from '../../arrayFunctions/calculateMedian';

describe('calculateMedian', () => {
    it('should return the median of an odd-length array', () => {
        expect(calculateMedian([3, 1, 4, 1, 5, 9, 2])).toBe(3);
        expect(calculateMedian([1, 2, 3, 4, 5])).toBe(3);
    });

    it('should return the median of an even-length array', () => {
        expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
        expect(calculateMedian([3, 1, 4, 2])).toBe(2.5);
    });

    it('should return the only element for a single-element array', () => {
        expect(calculateMedian([42])).toBe(42);
    });

    it('should return NaN for an empty array', () => {
        expect(calculateMedian([])).toBeNaN();
    });

    it('should handle arrays with negative numbers', () => {
        expect(calculateMedian([-5, -1, -3, -2, -4])).toBe(-3);
    });

    it('should handle arrays with duplicate numbers', () => {
        expect(calculateMedian([1, 2, 2, 3, 4])).toBe(2);
    });
});