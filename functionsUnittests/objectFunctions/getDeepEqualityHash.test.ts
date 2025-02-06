import { getDeepEqualityHash } from '../../objectFunctions/getDeepEqualityHash';

describe('getDeepEqualityHash', () => {
    // Test case 1: Generate hash for a simple object
    it('1. should generate hash for a simple object', () => {
        const obj = { a: 1, b: 2 };
        const result = getDeepEqualityHash(obj);
        const expected = getDeepEqualityHash({ a: 1, b: 2 });
        expect(result).toBe(expected);
    });

    // Test case 2: Generate hash for a nested object
    it('2. should generate hash for a nested object', () => {
        const obj = { a: 1, b: { c: 2, d: 3 } };
        const result = getDeepEqualityHash(obj);
        const expected = getDeepEqualityHash({ a: 1, b: { c: 2, d: 3 } });
        expect(result).toBe(expected);
    });

    // Test case 3: Generate hash for an array
    it('3. should generate hash for an array', () => {
        const arr = [1, 2, { a: 3 }];
        const result = getDeepEqualityHash(arr);
        const expected = getDeepEqualityHash([1, 2, { a: 3 }]);
        expect(result).toBe(expected);
    });

    // Test case 4: Handle non-object input (number)
    it('4. should throw a TypeError if input is a number', () => {
        expect(() => getDeepEqualityHash(42 as any)).toThrow(TypeError);
    });

    // Test case 5: Handle non-object input (string)
    it('5. should throw a TypeError if input is a string', () => {
        expect(() => getDeepEqualityHash('string' as any)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (boolean)
    it('6. should throw a TypeError if input is a boolean', () => {
        expect(() => getDeepEqualityHash(true as any)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (null)
    it('7. should throw a TypeError if input is null', () => {
        expect(() => getDeepEqualityHash(null as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (undefined)
    it('8. should throw a TypeError if input is undefined', () => {
        expect(() => getDeepEqualityHash(undefined as any)).toThrow(TypeError);
    });
});