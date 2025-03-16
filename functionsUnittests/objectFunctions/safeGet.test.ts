import { safeGet } from '../../objectFunctions/safeGet';

describe('safeGet', () => {
    // Test case 1: Retrieve a nested value
    it('Test case 1: should retrieve a nested value', () => {
        const obj = { a: { b: { c: 42 } } };
        const result = safeGet(obj, 'a.b.c');
        const expected = 42;
        expect(result).toEqual(expected);
    });

    // Test case 2: Return default value if path does not exist
    it('Test case 2: should return default value if path does not exist', () => {
        const obj = { a: { b: { c: 42 } } };
        const result = safeGet(obj, 'a.b.d', 'default');
        const expected = 'default';
        expect(result).toEqual(expected);
    });

    // Test case 3: Handle empty path
    it('Test case 3: should return the object itself if path is empty', () => {
        const obj = { a: { b: { c: 42 } } };
        const result = safeGet(obj, '');
        const expected = obj;
        expect(result).toEqual(expected);
    });

    // Test case 4: Handle non-object input (number)
    it('Test case 4: should throw a TypeError if input is a number', () => {
        expect(() => safeGet(42 as any, 'a.b.c')).toThrow(TypeError);
    });

    // Test case 5: Handle non-object input (string)
    it('Test case 5: should throw a TypeError if input is a string', () => {
        expect(() => safeGet('string' as any, 'a.b.c')).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (boolean)
    it('Test case 6: should throw a TypeError if input is a boolean', () => {
        expect(() => safeGet(true as any, 'a.b.c')).toThrow(TypeError);
    });

    // Test case 7: Handle null input
    it('Test case 7: should throw a TypeError if input is null', () => {
        expect(() => safeGet(null as any, 'a.b.c')).toThrow(TypeError);
    });

    // Test case 8: Handle undefined input
    it('Test case 8: should throw a TypeError if input is undefined', () => {
        expect(() => safeGet(undefined as any, 'a.b.c')).toThrow(TypeError);
    });
});
