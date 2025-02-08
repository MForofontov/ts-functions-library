import { unflattenObject } from '../../objectFunctions/unflattenObject';

describe('unflattenObject', () => {
    // Test case 1: Unflatten a simple object
    it('1. should unflatten a simple object', () => {
        const obj = { 'a.b.c': 1, 'a.b.d': 2, 'e': 3 };
        const result = unflattenObject(obj);
        const expected = { a: { b: { c: 1, d: 2 } }, e: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 2: Unflatten an object with nested arrays
    it('2. should unflatten an object with nested arrays', () => {
        const obj = { 'a.0.b': 1, 'a.1.c': 2 };
        const result = unflattenObject(obj);
        const expected = { a: [{ b: 1 }, { c: 2 }] };
        expect(result).toEqual(expected);
    });

    // Test case 3: Unflatten an object with various data types
    it('3. should unflatten an object with various data types', () => {
        const obj = { 'a.b.c': true, 'a.b.d': 'string', 'a.b.e': null, 'a.b.f': undefined, 'a.b.g': [1, 2, 3], 'a.b.h.i': 4 };
        const result = unflattenObject(obj);
        const expected = { a: { b: { c: true, d: 'string', e: null, f: undefined, g: [1, 2, 3], h: { i: 4 } } } };
        expect(result).toEqual(expected);
    });

    // Test case 4: Unflatten an object with empty values
    it('4. should unflatten an object with empty values', () => {
        const obj = { 'a.b.c': '', 'a.b.d': null, 'a.b.e': undefined };
        const result = unflattenObject(obj);
        const expected = { a: { b: { c: '', d: null, e: undefined } } };
        expect(result).toEqual(expected);
    });

    // Test case 5: Handle empty object
    it('5. should return an empty object if the input object is empty', () => {
        const obj = {};
        const result = unflattenObject(obj);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 6: Handle non-object input (number)
    it('6. should throw a TypeError if input is a number', () => {
        expect(() => unflattenObject(42 as any)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (string)
    it('7. should throw a TypeError if input is a string', () => {
        expect(() => unflattenObject('string' as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (boolean)
    it('8. should throw a TypeError if input is a boolean', () => {
        expect(() => unflattenObject(true as any)).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (null)
    it('9. should throw a TypeError if input is null', () => {
        expect(() => unflattenObject(null as any)).toThrow(TypeError);
    });

    // Test case 10: Handle non-object input (undefined)
    it('10. should throw a TypeError if input is undefined', () => {
        expect(() => unflattenObject(undefined as any)).toThrow(TypeError);
    });
});
