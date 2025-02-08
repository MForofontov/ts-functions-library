import { getNestedValue } from '../../objectFunctions/getNestedValue';

describe('getNestedValue', () => {
    // Test case 1: Get a nested value from a simple object
    it('1. should get a nested value from a simple object', () => {
        const obj = { a: { b: { c: 3 } } };
        const result = getNestedValue(obj, 'a.b.c');
        const expected = 3;
        expect(result).toBe(expected);
    });

    // Test case 2: Get a nested value from a nested object
    it('2. should get a nested value from a nested object', () => {
        const obj = { a: { b: { c: { d: 4 } } } };
        const result = getNestedValue(obj, 'a.b.c.d');
        const expected = 4;
        expect(result).toBe(expected);
    });

    // Test case 3: Get a nested value from an array
    it('3. should get a nested value from an array', () => {
        const obj = { a: [{ b: 2 }, { c: 3 }] };
        const result = getNestedValue(obj, 'a.1.c');
        const expected = 3;
        expect(result).toBe(expected);
    });

    // Test case 4: Get a nested value from an object with various data types
    it('4. should get a nested value from an object with various data types', () => {
        const obj = { a: { b: { c: true, d: 'string', e: null, f: undefined, g: [1, 2, 3], h: { i: 4 } } } };
        const result = getNestedValue(obj, 'a.b.h.i');
        const expected = 4;
        expect(result).toBe(expected);
    });

    // Test case 5: Return undefined for a non-existent nested value
    it('5. should return undefined for a non-existent nested value', () => {
        const obj = { a: { b: { c: 3 } } };
        const result = getNestedValue(obj, 'a.b.d');
        expect(result).toBeUndefined();
    });

    // Test case 6: Return undefined for an empty path
    it('6. should return undefined for an empty path', () => {
        const obj = { a: { b: { c: 3 } } };
        const result = getNestedValue(obj, '');
        expect(result).toBeUndefined();
    });

    // Test case 7: Handle non-object input (number)
    it('7. should throw a TypeError if input is a number', () => {
        expect(() => getNestedValue(42 as any, 'a')).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (string)
    it('8. should throw a TypeError if input is a string', () => {
        expect(() => getNestedValue('string' as any, 'a')).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (boolean)
    it('9. should throw a TypeError if input is a boolean', () => {
        expect(() => getNestedValue(true as any, 'a')).toThrow(TypeError);
    });

    // Test case 10: Handle non-object input (null)
    it('10. should throw a TypeError if input is null', () => {
        expect(() => getNestedValue(null as any, 'a')).toThrow(TypeError);
    });

    // Test case 11: Handle non-object input (undefined)
    it('11. should throw a TypeError if input is undefined', () => {
        expect(() => getNestedValue(undefined as any, 'a')).toThrow(TypeError);
    });
});
