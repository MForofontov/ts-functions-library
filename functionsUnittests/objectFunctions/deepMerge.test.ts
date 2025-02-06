import { deepMerge } from '../../objectFunctions/deepMerge';

describe('deepMerge', () => {
    // Test case 1: Deep merge two simple objects
    it('1. should deep merge two simple objects', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const result = deepMerge(obj1, obj2);
        const expected = { a: 1, b: 3, c: 4 };
        expect(result).toEqual(expected);
    });

    // Test case 2: Deep merge nested objects
    it('2. should deep merge nested objects', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { b: { d: 3 }, e: 4 };
        const result = deepMerge(obj1, obj2);
        const expected = { a: 1, b: { c: 2, d: 3 }, e: 4 };
        expect(result).toEqual(expected);
    });

    // Test case 3: Deep merge arrays
    it('3. should deep merge arrays', () => {
        const obj1 = { a: [1, 2] };
        const obj2 = { a: [3, 4] };
        const result = deepMerge(obj1, obj2);
        const expected = { a: [1, 2, 3, 4] };
        expect(result).toEqual(expected);
    });

    // Test case 4: Handle non-object input (target is number)
    it('4. should throw a TypeError if target is a number', () => {
        expect(() => deepMerge(42 as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 5: Handle non-object input (source is number)
    it('5. should throw a TypeError if source is a number', () => {
        expect(() => deepMerge({ a: 1 }, 42 as any)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (target is string)
    it('6. should throw a TypeError if target is a string', () => {
        expect(() => deepMerge('string' as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (source is string)
    it('7. should throw a TypeError if source is a string', () => {
        expect(() => deepMerge({ a: 1 }, 'string' as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (target is boolean)
    it('8. should throw a TypeError if target is a boolean', () => {
        expect(() => deepMerge(true as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (source is boolean)
    it('9. should throw a TypeError if source is a boolean', () => {
        expect(() => deepMerge({ a: 1 }, true as any)).toThrow(TypeError);
    });

    // Test case 10: Handle non-object input (target is null)
    it('10. should throw a TypeError if target is null', () => {
        expect(() => deepMerge(null as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 11: Handle non-object input (source is null)
    it('11. should throw a TypeError if source is null', () => {
        expect(() => deepMerge({ a: 1 }, null as any)).toThrow(TypeError);
    });

    // Test case 12: Handle non-object input (target is undefined)
    it('12. should throw a TypeError if target is undefined', () => {
        expect(() => deepMerge(undefined as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 13: Handle non-object input (source is undefined)
    it('13. should throw a TypeError if source is undefined', () => {
        expect(() => deepMerge({ a: 1 }, undefined as any)).toThrow(TypeError);
    });
});