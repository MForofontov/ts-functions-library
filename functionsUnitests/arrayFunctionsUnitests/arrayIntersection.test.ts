import { arrayIntersection } from '../../arrayFunctions/arrayIntersection';

describe('arrayIntersection', () => {
    it('should return elements that are present in both arrays', () => {
        expect(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
        expect(arrayIntersection(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['b', 'c']);
    });

    it('should return an empty array if there are no common elements', () => {
        expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    });

    it('should return an empty array if the first array is empty', () => {
        expect(arrayIntersection([], [1, 2, 3])).toEqual([]);
    });

    it('should return an empty array if the second array is empty', () => {
        expect(arrayIntersection([1, 2, 3], [])).toEqual([]);
    });

    it('should return an empty array if both arrays are empty', () => {
        expect(arrayIntersection([], [])).toEqual([]);
    });

    it('should handle arrays with different types of elements', () => {
        expect(arrayIntersection([1, 'a', true], [true, 2, 'a'])).toEqual(['a', true]);
    });
});