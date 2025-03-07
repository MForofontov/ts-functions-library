import { deepCloneWith } from '../../objectFunctions/deepCloneWith';

describe('deepCloneWith', () => {
    const cloneFn = (value: any) => value;

    // Test case 1: Deep clone a simple object
    it('1. should deep clone a simple object', () => {
        const obj = { a: 1, b: 2 };
        const result = deepCloneWith(obj, cloneFn);
        const expected = { a: 1, b: 2 };
        expect(result).toEqual(expected);
        expect(result).not.toBe(obj); // Ensure it's a deep clone
    });

    // Test case 2: Deep clone a nested object
    it('2. should deep clone a nested object', () => {
        const obj = { a: 1, b: { c: 2, d: 3 } };
        const result = deepCloneWith(obj, cloneFn);
        const expected = { a: 1, b: { c: 2, d: 3 } };
        expect(result).toEqual(expected);
        expect(result.b).not.toBe(obj.b); // Ensure nested object is also cloned
    });

    // Test case 3: Deep clone an array
    it('3. should deep clone an array', () => {
        const arr = [1, 2, { a: 3 }];
        const result = deepCloneWith(arr, cloneFn);
        const expected = [1, 2, { a: 3 }];
        expect(result).toEqual(expected);
        expect(result).not.toBe(arr); // Ensure it's a deep clone
        expect(result[2]).not.toBe(arr[2]); // Ensure nested object is also cloned
    });

    // Test case 4: Handle non-object input (number)
    it('4. should throw a TypeError if input is a number', () => {
        expect(() => deepCloneWith(42 as any, cloneFn)).toThrow(TypeError);
    });

    // Test case 5: Handle non-object input (string)
    it('5. should throw a TypeError if input is a string', () => {
        expect(() => deepCloneWith('string' as any, cloneFn)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (boolean)
    it('6. should throw a TypeError if input is a boolean', () => {
        expect(() => deepCloneWith(true as any, cloneFn)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (null)
    it('7. should throw a TypeError if input is null', () => {
        expect(() => deepCloneWith(null as any, cloneFn)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (undefined)
    it('8. should throw a TypeError if input is undefined', () => {
        expect(() => deepCloneWith(undefined as any, cloneFn)).toThrow(TypeError);
    });

    // Test case 9: Use the cloneFn for cloning values
    it('9. should use the cloneFn for cloning values', () => {
        const obj = { a: 1, b: 2 };
        const cloneFn = jest.fn(value => value);
        deepCloneWith(obj, cloneFn);
        expect(cloneFn).toHaveBeenCalledTimes(2);
    });
});