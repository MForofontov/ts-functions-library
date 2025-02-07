import { shallowEqual } from '../../objectFunctions/shallowEqual';

describe('shallowEqual', () => {
    // Test case 1: Compare two equal objects
    it('1. should return true for two equal objects', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, b: 2 };
        const result = shallowEqual(obj1, obj2);
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 2: Compare two different objects
    it('2. should return false for two different objects', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, b: 3 };
        const result = shallowEqual(obj1, obj2);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 3: Compare objects with different keys
    it('3. should return false for objects with different keys', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, c: 2 };
        const result = shallowEqual(obj1, obj2);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 4: Compare objects with different number of keys
    it('4. should return false for objects with different number of keys', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1 };
        const result = shallowEqual(obj1, obj2);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 5: Handle non-object input (number)
    it('5. should throw a TypeError if the first input is a number', () => {
        expect(() => shallowEqual(42 as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (string)
    it('6. should throw a TypeError if the first input is a string', () => {
        expect(() => shallowEqual('string' as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (boolean)
    it('7. should throw a TypeError if the first input is a boolean', () => {
        expect(() => shallowEqual(true as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (null)
    it('8. should throw a TypeError if the first input is null', () => {
        expect(() => shallowEqual(null as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (undefined)
    it('9. should throw a TypeError if the first input is undefined', () => {
        expect(() => shallowEqual(undefined as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 10: Handle non-object input for the second parameter (number)
    it('10. should throw a TypeError if the second input is a number', () => {
        expect(() => shallowEqual({ a: 1 }, 42 as any)).toThrow(TypeError);
    });

    // Test case 11: Handle non-object input for the second parameter (string)
    it('11. should throw a TypeError if the second input is a string', () => {
        expect(() => shallowEqual({ a: 1 }, 'string' as any)).toThrow(TypeError);
    });

    // Test case 12: Handle non-object input for the second parameter (boolean)
    it('12. should throw a TypeError if the second input is a boolean', () => {
        expect(() => shallowEqual({ a: 1 }, true as any)).toThrow(TypeError);
    });

    // Test case 13: Handle non-object input for the second parameter (null)
    it('13. should throw a TypeError if the second input is null', () => {
        expect(() => shallowEqual({ a: 1 }, null as any)).toThrow(TypeError);
    });

    // Test case 14: Handle non-object input for the second parameter (undefined)
    it('14. should throw a TypeError if the second input is undefined', () => {
        expect(() => shallowEqual({ a: 1 }, undefined as any)).toThrow(TypeError);
    });
});
