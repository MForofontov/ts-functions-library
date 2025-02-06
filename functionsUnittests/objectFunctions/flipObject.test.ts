import { flipObject } from '../../objectFunctions/flipObject';

describe('flipObject', () => {
    // Test case 1: Flip a simple object
    it('1. should flip a simple object', () => {
        const obj = { a: 1, b: 2 };
        const result = flipObject(obj);
        const expected = { "1": 'a', "2": 'b' };
        expect(result).toEqual(expected);
    });

    // Test case 2: Flip an object with string values
    it('2. should flip an object with string values', () => {
        const obj = { a: 'x', b: 'y' };
        const result = flipObject(obj);
        const expected = { x: 'a', y: 'b' };
        expect(result).toEqual(expected);
    });

    // Test case 3: Flip an object with mixed types of values
    it('3. should flip an object with mixed types of values', () => {
        const obj = { a: 1, b: 'x', c: true };
        const result = flipObject(obj);
        const expected = { "1": 'a', x: 'b', "true": 'c' };
        expect(result).toEqual(expected);
    });

    // Test case 4: Handle an empty object
    it('4. should handle an empty object', () => {
        const obj = {};
        const result = flipObject(obj);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 5: Handle non-object input (number)
    it('5. should throw a TypeError if input is a number', () => {
        expect(() => flipObject(42 as any)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (string)
    it('6. should throw a TypeError if input is a string', () => {
        expect(() => flipObject('string' as any)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (boolean)
    it('7. should throw a TypeError if input is a boolean', () => {
        expect(() => flipObject(true as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (null)
    it('8. should throw a TypeError if input is null', () => {
        expect(() => flipObject(null as any)).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (undefined)
    it('9. should throw a TypeError if input is undefined', () => {
        expect(() => flipObject(undefined as any)).toThrow(TypeError);
    });
});
