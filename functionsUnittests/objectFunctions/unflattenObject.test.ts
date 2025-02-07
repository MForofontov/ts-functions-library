import { unflattenObject } from '../../objectFunctions/unflattenObject';

describe('unflattenObject', () => {
    // Test case 1: Unflatten a simple object
    it('1. should unflatten a simple object', () => {
        const obj = { 'a': 1, 'b': 2 };
        const result = unflattenObject(obj);
        const expected = { a: 1, b: 2 };
        expect(result).toEqual(expected);
    });

    // Test case 2: Unflatten a nested object
    it('2. should unflatten a nested object', () => {
        const obj = { 'a': 1, 'b.c': 2, 'b.d': 3 };
        const result = unflattenObject(obj);
        const expected = { a: 1, b: { c: 2, d: 3 } };
        expect(result).toEqual(expected);
    });

    // Test case 3: Unflatten an object with arrays
    it('3. should unflatten an object with arrays', () => {
        const obj = { 'a.0': 1, 'a.1': 2, 'a.2': 3, 'b.c': 4 };
        const result = unflattenObject(obj);
        const expected = { a: [1, 2, 3], b: { c: 4 } };
        expect(result).toEqual(expected);
    });

    // Test case 4: Unflatten an object with nested arrays
    it('4. should unflatten an object with nested arrays', () => {
        const obj = { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2.c': 3 };
        const result = unflattenObject(obj);
        const expected = { a: { b: [1, 2, { c: 3 }] } };
        expect(result).toEqual(expected);
    });

    // Test case 5: Handle non-object input (number)
    it('5. should throw a TypeError if input is a number', () => {
        expect(() => unflattenObject(42 as any)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (string)
    it('6. should throw a TypeError if input is a string', () => {
        expect(() => unflattenObject('string' as any)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (boolean)
    it('7. should throw a TypeError if input is a boolean', () => {
        expect(() => unflattenObject(true as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (null)
    it('8. should throw a TypeError if input is null', () => {
        expect(() => unflattenObject(null as any)).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (undefined)
    it('9. should throw a TypeError if input is undefined', () => {
        expect(() => unflattenObject(undefined as any)).toThrow(TypeError);
    });
});
