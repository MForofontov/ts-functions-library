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

    // Test case 4: Handle arrays with objects
    it('4. should handle arrays containing objects and use dot notation for indices', () => {
        const obj = { a: [{ b: 1 }, { c: 2 }], d: { e: 3 } };
        const result = toDotNotation(obj);
        const expected = { 'a.0.b': 1, 'a.1.c': 2, 'd.e': 3 };
        expect(result).toEqual(expected);
    });

    // Test case 5: Handle arrays with mixed types
    it('5. should handle arrays with mixed types using dot notation for indices', () => {
        const obj = { a: [1, { b: 2 }, 'string'], d: { e: 3 } };
        const result = toDotNotation(obj);
        const expected = { 'a.0': 1, 'a.1.b': 2, 'a.2': 'string', 'd.e': 3 };
        expect(result).toEqual(expected);
    });

    // Test case 6: Handle deeply nested arrays with objects
    it('6. should handle deeply nested arrays containing objects', () => {
        const obj = { a: [[{ b: 1 }], { c: 2 }], d: { e: 3 } };
        const result = toDotNotation(obj);
        const expected = { 'a.0.0.b': 1, 'a.1.c': 2, 'd.e': 3 };
        expect(result).toEqual(expected);
    });

    // Test case 7: Handle an object with null values
    it('7. should include null values in the result', () => {
        const obj = { a: { b: null }, c: 3 };
        const result = toDotNotation(obj);
        const expected = { 'a.b': null, 'c': 3 };
        expect(result).toEqual(expected);
    });

    // Test case 8: Handle an object with undefined values
    it('8. should include undefined values in the result', () => {
        const obj = { a: { b: undefined }, c: 3 };
        const result = toDotNotation(obj);
        const expected = { 'a.b': undefined, 'c': 3 };
        expect(result).toEqual(expected);
    });

    // Test case 9: Handle deeply nested objects
    it('9. should handle deeply nested objects', () => {
        const obj = { a: { b: { c: { d: { e: 5 } } } } };
        const result = toDotNotation(obj);
        const expected = { 'a.b.c.d.e': 5 };
        expect(result).toEqual(expected);
    });

    // Test case 10: Handle an object with special characters in keys
    it('10. should handle keys with special characters', () => {
        const obj = { 'a.b': { c: 1 }, d: 2 };
        const result = toDotNotation(obj);
        const expected = { 'a.b.c': 1, 'd': 2 };
        expect(result).toEqual(expected);
    });

    // Test case 11: Handle an object with arrays of primitives
    it('11. should handle arrays of primitives', () => {
        const obj = { a: [1, 2, 3], b: { c: [4, 5] } };
        const result = toDotNotation(obj);
        const expected = { 'a.0': 1, 'a.1': 2, 'a.2': 3, 'b.c.0': 4, 'b.c.1': 5 };
        expect(result).toEqual(expected);
    });

    // Test case 12: Throw error for non-object input (number)
    it('12. should throw a TypeError if input is a number', () => {
        expect(() => toDotNotation(42 as any)).toThrow(TypeError);
    });

    // Test case 13: Throw error for non-object input (string)
    it('13. should throw a TypeError if input is a string', () => {
        expect(() => toDotNotation('string' as any)).toThrow(TypeError);
    });

    // Test case 14: Throw error for non-object input (boolean)
    it('14. should throw a TypeError if input is a boolean', () => {
        expect(() => toDotNotation(true as any)).toThrow(TypeError);
    });

    // Test case 15: Throw error for null input
    it('15. should throw a TypeError if input is null', () => {
        expect(() => toDotNotation(null as any)).toThrow(TypeError);
    });

    // Test case 16: Throw error for undefined input
    it('16. should throw a TypeError if input is undefined', () => {
        expect(() => toDotNotation(undefined as any)).toThrow(TypeError);
    });
});
