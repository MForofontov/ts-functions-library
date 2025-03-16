import { safeSet } from '../../objectFunctions/safeSet';

describe('safeSet', () => {
    // Test case 1: Set a nested value
    it('Test case 1: should set a nested value', () => {
        const obj = { a: { b: { c: 42 } } };
        safeSet(obj, 'a.b.c', 100);
        const expected = { a: { b: { c: 100 } } };
        expect(obj).toEqual(expected);
    });

    // Test case 2: Create nested objects if path does not exist
    it('Test case 2: should create nested objects if path does not exist', () => {
        const obj = { a: { b: { c: 42 } } };
        safeSet(obj, 'a.b.d.e', 100);
        const expected = { a: { b: { c: 42, d: { e: 100 } } } };
        expect(obj).toEqual(expected);
    });

    // Test case 3: Handle empty path
    it('Test case 3: should not modify the object if path is empty', () => {
        const obj = { a: { b: { c: 42 } } };
        safeSet(obj, '', 100);
        const expected = { a: { b: { c: 42 } } };
        expect(obj).toEqual(expected);
    });

    // Test case 4: Handle non-object input (number)
    it('Test case 4: should throw a TypeError if input is a number', () => {
        expect(() => safeSet(42 as any, 'a.b.c', 100)).toThrow(TypeError);
    });

    // Test case 5: Handle non-object input (string)
    it('Test case 5: should throw a TypeError if input is a string', () => {
        expect(() => safeSet('string' as any, 'a.b.c', 100)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (boolean)
    it('Test case 6: should throw a TypeError if input is a boolean', () => {
        expect(() => safeSet(true as any, 'a.b.c', 100)).toThrow(TypeError);
    });

    // Test case 7: Handle null input
    it('Test case 7: should throw a TypeError if input is null', () => {
        expect(() => safeSet(null as any, 'a.b.c', 100)).toThrow(TypeError);
    });

    // Test case 8: Handle undefined input
    it('Test case 8: should throw a TypeError if input is undefined', () => {
        expect(() => safeSet(undefined as any, 'a.b.c', 100)).toThrow(TypeError);
    });

    // Test case 9: Handle path with special characters
    it('Test case 9: should set a value for a path with special characters', () => {
        const obj = { 'a-b': { 'c.d': 42 } };
        safeSet(obj, 'a-b.c.d', 100);
        const expected = { 'a-b': { 'c.d': 100 } };
        expect(obj).toEqual(expected);
    });

    // Test case 10: Handle path with spaces
    it('Test case 10: should set a value for a path with spaces', () => {
        const obj = { 'a b': { 'c d': 42 } };
        safeSet(obj, 'a b.c d', 100);
        const expected = { 'a b': { 'c d': 100 } };
        expect(obj).toEqual(expected);
    });

    // Test case 11: Handle path with numeric keys
    it('Test case 11: should set a value for a path with numeric keys', () => {
        const obj = { a: { 1: { b: 42 } } };
        safeSet(obj, 'a.1.b', 100);
        const expected = { a: { 1: { b: 100 } } };
        expect(obj).toEqual(expected);
    });

    // Test case 12: Handle path with mixed types
    it('Test case 12: should set a value for a path with mixed types', () => {
        const obj = { a: [{ b: { c: 42 } }] };
        safeSet(obj, 'a.0.b.c', 100);
        const expected = { a: [{ b: { c: 100 } }] };
        expect(obj).toEqual(expected);
    });
});
