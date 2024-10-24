import { chunkArray } from '../../arrayFunctions/chunkArray';

describe('chunkArray', () => {
    // Test case 1: Normal array with valid chunk size
    it('1. should split array into chunks of specified size', () => {
        expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    // Test case 2: Empty array
    it('2. should return an empty array when input array is empty', () => {
        expect(chunkArray([], 3)).toEqual([]);
    });

    // Test case 3: Chunk size larger than array length
    it('3. should return the original array when chunk size is larger than array length', () => {
        expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    // Test case 4: Chunk size of 1
    it('4. should split array into individual elements when chunk size is 1', () => {
        expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    // Test case 5: Chunk size equal to array length
    it('5. should return the original array when chunk size is equal to array length', () => {
        expect(chunkArray([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
    });

    // Test case 6: Chunk size of 0 (invalid case)
    it('6. should handle chunk size of 0', () => {
        expect(() => chunkArray([1, 2, 3], 0)).toThrow();
    });

    // Test case 7: Negative chunk size (invalid case)
    it('7. should handle negative chunk size', () => {
        expect(() => chunkArray([1, 2, 3], -1)).toThrow();
    });

    // Test case 8: Non-integer chunk size
    it('8. should handle non-integer chunk size', () => {
        expect(chunkArray([1, 2, 3, 4], 2.5)).toEqual([[1, 2], [3, 4]]);
    });

    // Test case 9: Array with different data types
    it('9. should handle array with different data types', () => {
        expect(chunkArray([1, 'a', true, null], 2)).toEqual([[1, 'a'], [true, null]]);
    });

    // Test case 10: Large arrays
    it('10. should handle large arrays', () => {
        const largeArray = Array.from({ length: 1000 }, (_, i) => i);
        const chunkSize = 100;
        const expectedChunks = Array.from({ length: 10 }, (_, i) => largeArray.slice(i * chunkSize, (i + 1) * chunkSize));
        expect(chunkArray(largeArray, chunkSize)).toEqual(expectedChunks);
    });

    // Test case 11: Arrays with special characters
    it('11. should handle arrays with special characters', () => {
        expect(chunkArray(['@', '#', '$', '%'], 2)).toEqual([['@', '#'], ['$', '%']]);
    });

    // Test case 12: Arrays with nested arrays
    it('12. should handle arrays with nested arrays', () => {
        expect(chunkArray([[1, 2], [3, 4], [5, 6]], 2)).toEqual([[[1, 2], [3, 4]], [[5, 6]]]);
    });

    // Test case 13: Arrays with null and undefined
    it('13. should handle arrays with null and undefined', () => {
        expect(chunkArray([null, undefined, 1, 2], 2)).toEqual([[null, undefined], [1, 2]]);
    });

    // Test case 14: Arrays with NaN values
    it('14. should handle arrays with NaN values', () => {
        expect(chunkArray([NaN, 1, NaN, 2], 2)).toEqual([[NaN, 1], [NaN, 2]]);
    });

    // Test case 15: Arrays with objects
    it('15. should handle arrays with objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        expect(chunkArray([obj1, obj2, obj1], 2)).toEqual([[obj1, obj2], [obj1]]);
    });

    // Test case 16: Arrays with functions
    it('16. should handle arrays with functions', () => {
        const func1 = () => {};
        const func2 = () => {};
        expect(chunkArray([func1, func2, func1], 2)).toEqual([[func1, func2], [func1]]);
    });

    // Test case 17: Arrays with symbols
    it('17. should handle arrays with symbols', () => {
        const sym1 = Symbol('a');
        const sym2 = Symbol('b');
        expect(chunkArray([sym1, sym2, sym1], 2)).toEqual([[sym1, sym2], [sym1]]);
    });

    // Test case 18: Arrays with dates
    it('18. should handle arrays with dates', () => {
        const date1 = new Date(2020, 1, 1);
        const date2 = new Date(2021, 1, 1);
        expect(chunkArray([date1, date2, date1], 2)).toEqual([[date1, date2], [date1]]);
    });

    // Test case 19: Arrays with regex
    it('19. should handle arrays with regex', () => {
        const regex1 = /a/;
        const regex2 = /b/;
        expect(chunkArray([regex1, regex2, regex1], 2)).toEqual([[regex1, regex2], [regex1]]);
    });
});