import { omitKeys } from '../../objectFunctions/omitKeys';

describe('omitKeys', () => {
    // Test case 1: Omit a single key from the object
    it('1. should omit a single key from the object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = omitKeys(obj, ['b']);
        const expected = { a: 1, c: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 2: Omit multiple keys from the object
    it('2. should omit multiple keys from the object', () => {
        const obj = { a: 1, b: 2, c: 3, d: 4 };
        const result = omitKeys(obj, ['b', 'd']);
        const expected = { a: 1, c: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 3: Return the same object if no keys are omitted
    it('3. should return the same object if no keys are omitted', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = omitKeys(obj, []);
        const expected = obj;
        expect(result).toEqual(expected);
    });

    // Test case 4: Return an empty object if all keys are omitted
    it('4. should return an empty object if all keys are omitted', () => {
        const obj = { a: 1, b: 2 };
        const result = omitKeys(obj, ['a', 'b']);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 5: Handle non-existent keys gracefully
    it('5. should handle non-existent keys gracefully', () => {
        const obj = { a: 1, b: 2 };
        const result = omitKeys(obj, ['c']);
        const expected = obj;
        expect(result).toEqual(expected);
    });

    // Test case 6: Handle an empty object
    it('6. should handle an empty object', () => {
        const obj = {};
        const result = omitKeys(obj, ['a']);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 7: Handle objects with different types of values
    it('7. should handle objects with different types of values', () => {
        const obj = { a: 1, b: 'string', c: true, d: null, e: undefined };
        const result = omitKeys(obj, ['b', 'd']);
        const expected = { a: 1, c: true, e: undefined };
        expect(result).toEqual(expected);
    });

    // Test case 8: Handle nested objects
    it('8. should handle nested objects', () => {
        const obj = { a: { x: 1 }, b: { y: 2 }, c: 3 };
        const result = omitKeys(obj, ['a', 'b']);
        const expected = { c: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 9: Handle non-object input (number)
    it('9. should throw a TypeError if input is a number', () => {
        expect(() => omitKeys(42 as any, ['a'])).toThrow(TypeError);
    });

    // Test case 10: Handle non-object input (string)
    it('10. should throw a TypeError if input is a string', () => {
        expect(() => omitKeys('string' as any, ['a'])).toThrow(TypeError);
    });

    // Test case 11: Handle non-object input (boolean)
    it('11. should throw a TypeError if input is a boolean', () => {
        expect(() => omitKeys(true as any, ['a'])).toThrow(TypeError);
    });

    // Test case 12: Handle non-object input (null)
    it('12. should throw a TypeError if input is null', () => {
        expect(() => omitKeys(null as any, ['a'])).toThrow(TypeError);
    });

    // Test case 13: Handle non-object input (undefined)
    it('13. should throw a TypeError if input is undefined', () => {
        expect(() => omitKeys(undefined as any, ['a'])).toThrow(TypeError);
    });
});
