import { toDotNotation } from '../../objectFunctions/toDotNotation';

describe('toDotNotation', () => {
    // Test case 1: Convert a simple nested object
    it('1. should convert a simple nested object to dot notation', () => {
        const obj = { a: { b: { c: 1 }, d: 2 }, e: 3 };
        const result = toDotNotation(obj);
        const expected = { 'a.b.c': 1, 'a.d': 2, 'e': 3 };
        expect(result).toEqual(expected);
    });

    // Test case 2: Handle an empty object
    it('2. should return an empty object for an empty input object', () => {
        const obj = {};
        const result = toDotNotation(obj);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 3: Handle a flat object
    it('3. should return the same object if it is already flat', () => {
        const obj = { 'a.b.c': 1, 'a.d': 2, e: 3 };
        const result = toDotNotation(obj);
        const expected = { 'a.b.c': 1, 'a.d': 2, e: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 4: Handle an object with arrays
    it('4. should treat arrays as values and not flatten them', () => {
        const obj = { a: [1, 2, 3], b: { c: [4, 5] } };
        const result = toDotNotation(obj);
        const expected = { a: [1, 2, 3], 'b.c': [4, 5] };
        expect(result).toEqual(expected);
    });

    // Test case 5: Handle an object with null values
    it('5. should include null values in the result', () => {
        const obj = { a: { b: null }, c: 3 };
        const result = toDotNotation(obj);
        const expected = { 'a.b': null, c: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 6: Handle an object with undefined values
    it('6. should include undefined values in the result', () => {
        const obj = { a: { b: undefined }, c: 3 };
        const result = toDotNotation(obj);
        const expected = { 'a.b': undefined, c: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 7: Handle an object with special characters in keys
    it('7. should handle keys with special characters', () => {
        const obj = { 'a.b': { c: 1 }, d: 2 };
        const result = toDotNotation(obj);
        const expected = { 'a.b.c': 1, d: 2 };
        expect(result).toEqual(expected);
    });

    // Test case 8: Handle deeply nested objects
    it('8. should handle deeply nested objects', () => {
        const obj = { a: { b: { c: { d: { e: 5 } } } } };
        const result = toDotNotation(obj);
        const expected = { 'a.b.c.d.e': 5 };
        expect(result).toEqual(expected);
    });

    // Test case 9: Handle an object with mixed data types
    it('9. should handle objects with mixed data types', () => {
        const obj = { a: 1, b: 'string', c: true, d: { e: null, f: [1, 2] } };
        const result = toDotNotation(obj);
        const expected = { a: 1, b: 'string', c: true, 'd.e': null, 'd.f': [1, 2] };
        expect(result).toEqual(expected);
    });

    // Test case 10: Throw error for non-object input (number)
    it('10. should throw a TypeError if input is a number', () => {
        expect(() => toDotNotation(42 as any)).toThrow(TypeError);
    });

    // Test case 11: Throw error for non-object input (string)
    it('11. should throw a TypeError if input is a string', () => {
        expect(() => toDotNotation('string' as any)).toThrow(TypeError);
    });

    // Test case 12: Throw error for non-object input (boolean)
    it('12. should throw a TypeError if input is a boolean', () => {
        expect(() => toDotNotation(true as any)).toThrow(TypeError);
    });

    // Test case 13: Throw error for null input
    it('13. should throw a TypeError if input is null', () => {
        expect(() => toDotNotation(null as any)).toThrow(TypeError);
    });

    // Test case 14: Throw error for undefined input
    it('14. should throw a TypeError if input is undefined', () => {
        expect(() => toDotNotation(undefined as any)).toThrow(TypeError);
    });
});
