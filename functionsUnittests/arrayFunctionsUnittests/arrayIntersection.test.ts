import { arrayIntersection } from '../../arrayFunctions/arrayIntersection';

describe('arrayIntersection', () => {
    // Test case 1: Elements that are present in both arrays
    it('1. should return elements that are present in both arrays', () => {
        expect(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
        expect(arrayIntersection(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['b', 'c']);
    });

    // Test case 2: No common elements
    it('2. should return an empty array if there are no common elements', () => {
        expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    });

    // Test case 3: First array is empty
    it('3. should return an empty array if the first array is empty', () => {
        expect(arrayIntersection([], [1, 2, 3])).toEqual([]);
    });

    // Test case 4: Second array is empty
    it('4. should return an empty array if the second array is empty', () => {
        expect(arrayIntersection([1, 2, 3], [])).toEqual([]);
    });

    // Test case 5: Both arrays are empty
    it('5. should return an empty array if both arrays are empty', () => {
        expect(arrayIntersection([], [])).toEqual([]);
    });

    // Test case 6: Arrays with different types of elements
    it('6. should handle arrays with different types of elements', () => {
        expect(arrayIntersection([1, 'a', true], [true, 2, 'a'])).toEqual(['a', true]);
    });

    // Test case 7: Arrays with duplicate elements
    it('7. should handle arrays with duplicate elements', () => {
        expect(arrayIntersection([1, 2, 2, 3], [2, 3, 3, 4])).toEqual([2, 3]);
    });

    // Test case 8: Arrays with nested arrays
    it('8. should handle arrays with nested arrays', () => {
        expect(arrayIntersection([[1, 2], [3, 4]], [[3, 4], [5, 6]])).toEqual([[3, 4]]);
    });

    // Test case 9: Arrays with objects
    it('9. should handle arrays with objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        expect(arrayIntersection([obj1, obj2], [obj2])).toEqual([obj2]);
    });

    // Test case 10: Arrays with null and undefined
    it('10. should handle arrays with null and undefined', () => {
        expect(arrayIntersection([null, undefined, 1], [undefined, 2, null])).toEqual([null, undefined]);
    });

    // Test case 11: Arrays with NaN values
    it('11. should handle arrays with NaN values', () => {
        expect(arrayIntersection([NaN, 1, 2], [NaN, 2, 3])).toEqual([NaN, 2]);
    });

    // Test case 12: Large arrays
    it('12. should handle large arrays', () => {
        const largeArray1 = Array.from({ length: 1000 }, (_, i) => i);
        const largeArray2 = Array.from({ length: 500 }, (_, i) => i * 2);
        const expectedIntersection = Array.from({ length: 250 }, (_, i) => i * 2);
        expect(arrayIntersection(largeArray1, largeArray2)).toEqual(expectedIntersection);
    });

    // Test case 13: Arrays with special characters
    it('13. should handle arrays with special characters', () => {
        expect(arrayIntersection(['@', '#', '$'], ['#', '%', '&'])).toEqual(['#']);
    });

    // Test case 14: Arrays with mixed data types
    it('14. should handle arrays with mixed data types', () => {
        expect(arrayIntersection([1, 'a', null, undefined], [null, 2, 'a', undefined])).toEqual([null, 'a', undefined]);
    });

    // Test case 15: Arrays with boolean values
    it('15. should handle arrays with boolean values', () => {
        expect(arrayIntersection([true, false, true], [false, true])).toEqual([true, false]);
    });

    // Test case 16: Arrays with functions
    it('16. should handle arrays with functions', () => {
        const func1 = () => {};
        const func2 = () => {};
        expect(arrayIntersection([func1, func2], [func2])).toEqual([func2]);
    });

    // Test case 17: Arrays with symbols
    it('17. should handle arrays with symbols', () => {
        const sym1 = Symbol('a');
        const sym2 = Symbol('b');
        expect(arrayIntersection([sym1, sym2], [sym2])).toEqual([sym2]);
    });

    // Test case 18: Arrays with dates
    it('18. should handle arrays with dates', () => {
        const date1 = new Date(2020, 1, 1);
        const date2 = new Date(2021, 1, 1);
        expect(arrayIntersection([date1, date2], [date2])).toEqual([date2]);
    });

    // Test case 19: Arrays with regex
    it('19. should handle arrays with regex', () => {
        const regex1 = /a/;
        const regex2 = /b/;
        expect(arrayIntersection([regex1, regex2], [regex2])).toEqual([regex2]);
    });
});
