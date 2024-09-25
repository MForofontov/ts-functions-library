import { calculateMode } from '../../arrayFunctions/calculateMode';

describe('calculateMode', () => {
    it('should return the mode(s) of an array of numbers', () => {
        expect(calculateMode([1, 2, 3, 4, 5, 1, 2, 3, 1, 2])).toEqual([1, 2]);
        expect(calculateMode([1, 1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3]);
        expect(calculateMode([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array for an empty input array', () => {
        expect(calculateMode([])).toEqual([]);
    });

    it('should handle arrays with a single element', () => {
        expect(calculateMode([5])).toEqual([5]);
    });

    it('should handle arrays with all identical elements', () => {
        expect(calculateMode([2, 2, 2, 2])).toEqual([2]);
    });

    it('should handle arrays with negative numbers', () => {
        expect(calculateMode([-1, -1, -2, -2, -3])).toEqual([-1, -2]);
    });
});