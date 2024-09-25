import { arrayDifference } from '../../arrayFunctions/arrayDifference';

describe('arrayDifference', () => {
    it('should return elements in the first array that are not in the second array', () => {
        expect(arrayDifference([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([1, 2]);
        expect(arrayDifference(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['a']);
    });

    it('should return the first array if the second array is empty', () => {
        expect(arrayDifference([1, 2, 3, 4], [])).toEqual([1, 2, 3, 4]);
    });

    it('should return an empty array if the first array is empty', () => {
        expect(arrayDifference([], [1, 2, 3, 4])).toEqual([]);
    });

    it('should return an empty array if both arrays are empty', () => {
        expect(arrayDifference([], [])).toEqual([]);
    });

    it('should handle arrays with different types of elements', () => {
        expect(arrayDifference([1, 'a', true], [true, 2, 'b'])).toEqual([1, 'a']);
    });
});