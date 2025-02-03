import { isObjectEmpty } from '../../objectFunctions/isObjectEmpty';

describe('isObjectEmpty', () => {
    // Test case 1: Check an empty object
    it('1. should return true for an empty object', () => {
        const obj = {};
        const result = isObjectEmpty(obj);
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 2: Check a non-empty object
    it('2. should return false for a non-empty object', () => {
        const obj = { a: 1 };
        const result = isObjectEmpty(obj);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 3: Handle an object with undefined values
    it('3. should return false for an object with undefined values', () => {
        const obj = { a: undefined };
        const result = isObjectEmpty(obj);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 4: Handle an object with null values
    it('4. should return false for an object with null values', () => {
        const obj = { a: null };
        const result = isObjectEmpty(obj);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 5: Handle an object with mixed types of values
    it('5. should return false for an object with mixed types of values', () => {
        const obj = { a: 1, b: 'string', c: true, d: null, e: undefined };
        const result = isObjectEmpty(obj);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 6: Handle an object with nested objects
    it('6. should return false for an object with nested objects', () => {
        const obj = { a: { b: 1 }, c: { d: 2 } };
        const result = isObjectEmpty(obj);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 7: Handle an object with arrays
    it('7. should return false for an object with arrays', () => {
        const obj = { a: [1, 2, 3], b: [4, 5, 6] };
        const result = isObjectEmpty(obj);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 8: Handle an object with functions
    it('8. should return false for an object with functions', () => {
        const obj = { a: () => {}, b: function() {} };
        const result = isObjectEmpty(obj);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 9: Handle an object with symbols
    it('9. should return false for an object with symbols', () => {
        const obj = { a: Symbol('a'), b: Symbol('b') };
        const result = isObjectEmpty(obj);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 10: Handle an object with BigInt values
    it('10. should return false for an object with BigInt values', () => {
        const obj = { a: BigInt(1), b: BigInt(2) };
        const result = isObjectEmpty(obj);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 11: Handle non-object input (number)
    it('11. should throw a TypeError if input is a number', () => {
        expect(() => isObjectEmpty(42 as any)).toThrow(TypeError);
    });

    // Test case 12: Handle non-object input (string)
    it('12. should throw a TypeError if input is a string', () => {
        expect(() => isObjectEmpty('string' as any)).toThrow(TypeError);
    });

    // Test case 13: Handle non-object input (boolean)
    it('13. should throw a TypeError if input is a boolean', () => {
        expect(() => isObjectEmpty(true as any)).toThrow(TypeError);
    });

    // Test case 14: Handle non-object input (null)
    it('14. should throw a TypeError if input is null', () => {
        expect(() => isObjectEmpty(null as any)).toThrow(TypeError);
    });

    // Test case 15: Handle non-object input (undefined)
    it('15. should throw a TypeError if input is undefined', () => {
        expect(() => isObjectEmpty(undefined as any)).toThrow(TypeError);
    });
});
