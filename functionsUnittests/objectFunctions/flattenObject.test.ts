import { flattenObject } from '../../objectFunctions/flattenObject';

describe('flattenObject', () => {
    // Test case 1: Flatten a simple object
    it('1. should flatten a simple object', () => {
        const obj = { a: 1, b: 2 };
        const result = flattenObject(obj);
        const expected = { a: 1, b: 2 };
        expect(result).toEqual(expected);
    });

    // Test case 2: Flatten a nested object
    it('2. should flatten a nested object', () => {
        const obj = { a: 1, b: { c: 2, d: 3 } };
        const result = flattenObject(obj);
        const expected = { a: 1, 'b.c': 2, 'b.d': 3 };
        expect(result).toEqual(expected);
    });

    // Test case 3: Flatten an object with arrays
    it('3. should flatten an object with arrays', () => {
        const obj = { a: [1, 2, 3], b: { c: 4 } };
        const result = flattenObject(obj);
        const expected = { 'a.0': 1, 'a.1': 2, 'a.2': 3, 'b.c': 4 };
        expect(result).toEqual(expected);
    });

    // Test case 4: Flatten an object with nested arrays
    it('4. should flatten an object with nested arrays', () => {
        const obj = { a: { b: [1, 2, { c: 3 }] } };
        const result = flattenObject(obj);
        const expected = { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2.c': 3 };
        expect(result).toEqual(expected);
    });

    // Test case 5: Handle non-object input (number)
    it('5. should throw a TypeError if input is a number', () => {
        expect(() => flattenObject(42 as any)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (string)
    it('6. should throw a TypeError if input is a string', () => {
        expect(() => flattenObject('string' as any)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (boolean)
    it('7. should throw a TypeError if input is a boolean', () => {
        expect(() => flattenObject(true as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (null)
    it('8. should throw a TypeError if input is null', () => {
        expect(() => flattenObject(null as any)).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (undefined)
    it('9. should throw a TypeError if input is undefined', () => {
        expect(() => flattenObject(undefined as any)).toThrow(TypeError);
    });
});
