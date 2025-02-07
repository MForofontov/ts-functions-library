import { removeEmptyValues } from '../../objectFunctions/removeEmptyValues';

describe('removeEmptyValues', () => {
    // Test case 1: Remove empty values from a simple object
    it('1. should remove empty values from a simple object', () => {
        const obj = { a: 1, b: null, c: undefined, d: 2 };
        const result = removeEmptyValues(obj);
        const expected = { a: 1, d: 2 };
        expect(result).toEqual(expected);
    });

    // Test case 2: Remove empty values from a nested object
    it('2. should remove empty values from a nested object', () => {
        const obj = { a: { b: null, c: 2 }, d: undefined, e: 3 };
        const result = removeEmptyValues(obj);
        const expected = { a: { c: 2 }, e: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 3: Handle an object with no empty values
    it('3. should handle an object with no empty values', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = removeEmptyValues(obj);
        const expected = { a: 1, b: 2, c: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 4: Handle an empty object
    it('4. should handle an empty object', () => {
        const obj = {};
        const result = removeEmptyValues(obj);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 5: Handle non-object input (number)
    it('5. should throw a TypeError if input is a number', () => {
        expect(() => removeEmptyValues(42 as any)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (string)
    it('6. should throw a TypeError if input is a string', () => {
        expect(() => removeEmptyValues('string' as any)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (boolean)
    it('7. should throw a TypeError if input is a boolean', () => {
        expect(() => removeEmptyValues(true as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (null)
    it('8. should throw a TypeError if input is null', () => {
        expect(() => removeEmptyValues(null as any)).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (undefined)
    it('9. should throw a TypeError if input is undefined', () => {
        expect(() => removeEmptyValues(undefined as any)).toThrow(TypeError);
    });
});
