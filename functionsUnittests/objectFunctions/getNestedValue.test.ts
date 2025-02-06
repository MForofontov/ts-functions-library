import { getNestedValue } from '../../objectFunctions/getNestedValue';

describe('getNestedValue', () => {
    // Test case 1: Retrieve a nested value from an object
    it('1. should retrieve a nested value from an object', () => {
        const obj = { a: { b: { c: 42 } } };
        const result = getNestedValue<number>(obj, 'a.b.c');
        const expected = 42;
        expect(result).toBe(expected);
    });

    // Test case 2: Return undefined for a non-existent path
    it('2. should return undefined for a non-existent path', () => {
        const obj = { a: { b: { c: 42 } } };
        const result = getNestedValue<number>(obj, 'a.b.d');
        const expected = undefined;
        expect(result).toBe(expected);
    });

    // Test case 3: Handle an empty path
    it('3. should return the object itself for an empty path', () => {
        const obj = { a: 1 };
        const result = getNestedValue(obj, '');
        const expected = obj;
        expect(result).toBe(expected);
    });

    // Test case 4: Handle a path with an array index
    it('4. should retrieve a value from an array within an object', () => {
        const obj = { a: { b: [1, 2, 3] } };
        const result = getNestedValue<number>(obj, 'a.b.1');
        const expected = 2;
        expect(result).toBe(expected);
    });

    // Test case 5: Handle a path with a non-existent array index
    it('5. should return undefined for a non-existent array index', () => {
        const obj = { a: { b: [1, 2, 3] } };
        const result = getNestedValue<number>(obj, 'a.b.5');
        const expected = undefined;
        expect(result).toBe(expected);
    });

    // Test case 6: Handle non-object input (number)
    it('6. should throw a TypeError if input is a number', () => {
        expect(() => getNestedValue(42 as any, 'a')).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (string)
    it('7. should throw a TypeError if input is a string', () => {
        expect(() => getNestedValue('string' as any, 'a')).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (boolean)
    it('8. should throw a TypeError if input is a boolean', () => {
        expect(() => getNestedValue(true as any, 'a')).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (null)
    it('9. should throw a TypeError if input is null', () => {
        expect(() => getNestedValue(null as any, 'a')).toThrow(TypeError);
    });

    // Test case 10: Handle non-object input (undefined)
    it('10. should throw a TypeError if input is undefined', () => {
        expect(() => getNestedValue(undefined as any, 'a')).toThrow(TypeError);
    });
});
