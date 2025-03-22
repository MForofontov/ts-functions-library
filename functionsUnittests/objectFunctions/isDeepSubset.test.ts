import { isDeepSubset } from '../../objectFunctions/isDeepSubset';

describe('isDeepSubset', () => {
    // Test case 1: Subset matches the object
    it('Test case 1: should return true if subset matches the object', () => {
        const subset = { a: 1, b: 2 };
        const obj = { a: 1, b: 2, c: 3 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(true);
    });

    // Test case 2: Subset does not match the object
    it('Test case 2: should return false if subset does not match the object', () => {
        const subset = { a: 1, b: 4 };
        const obj = { a: 1, b: 2, c: 3 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(false);
    });

    // Test case 3: Nested subset matches the object
    it('Test case 3: should return true if nested subset matches the object', () => {
        const subset = { a: { b: 2 } };
        const obj = { a: { b: 2, c: 3 }, d: 4 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(true);
    });

    // Test case 4: Nested subset does not match the object
    it('Test case 4: should return false if nested subset does not match the object', () => {
        const subset = { a: { b: 5 } };
        const obj = { a: { b: 2, c: 3 }, d: 4 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(false);
    });

    // Test case 5: Empty subset
    it('Test case 5: should return true if subset is empty', () => {
        const subset = {};
        const obj = { a: 1, b: 2 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(true);
    });

    // Test case 6: Subset with null values
    it('Test case 6: should return true if subset with null values matches the object', () => {
        const subset = { a: null };
        const obj = { a: null, b: 2 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(true);
    });

    // Test case 7: Subset with undefined values
    it('Test case 7: should return false if subset with undefined values does not match the object', () => {
        const subset = { a: undefined };
        const obj = { a: 1, b: 2 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(false);
    });

    // Test case 8: Subset with array values
    it('Test case 8: should return true if subset with array values matches the object', () => {
        const subset = { a: [1, 2] };
        const obj = { a: [1, 2, 3], b: 4 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(true);
    });

    // Test case 9: Subset with mismatched array values
    it('Test case 9: should return false if subset with array values does not match the object', () => {
        const subset = { a: [1, 3] };
        const obj = { a: [1, 2, 3], b: 4 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(false);
    });

    // Test case 10: Subset with nested arrays
    it('Test case 10: should return true if subset with nested arrays matches the object', () => {
        const subset = { a: { b: [1, 2] } };
        const obj = { a: { b: [1, 2, 3] }, c: 4 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(true);
    });

    // Test case 11: Subset with mismatched nested arrays
    it('Test case 11: should return false if subset with nested arrays does not match the object', () => {
        const subset = { a: { b: [1, 4] } };
        const obj = { a: { b: [1, 2, 3] }, c: 4 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(false);
    });

    // Test case 12: Subset with different data types
    it('Test case 12: should return false if subset has mismatched data types', () => {
        const subset = { a: '1' };
        const obj = { a: 1, b: 2 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(false);
    });

    // Test case 13: Subset with additional keys in the object
    it('Test case 13: should return true if subset matches even with additional keys in the object', () => {
        const subset = { a: 1 };
        const obj = { a: 1, b: 2, c: 3 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(true);
    });

    // Test case 14: Subset with empty nested object
    it('Test case 14: should return true if subset has an empty nested object', () => {
        const subset = { a: {} };
        const obj = { a: { b: 1 }, c: 2 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(true);
    });

    // Test case 15: Subset with mismatched nested object
    it('Test case 15: should return false if subset has a mismatched nested object', () => {
        const subset = { a: { b: 2 } };
        const obj = { a: { b: 1 }, c: 2 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(false);
    });

    // Test case 16: Subset with deep nesting
    it('Test case 16: should return true if deeply nested subset matches the object', () => {
        const subset = { a: { b: { c: { d: 1 } } } };
        const obj = { a: { b: { c: { d: 1, e: 2 } }, f: 3 }, g: 4 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(true);
    });

    // Test case 17: Subset with mismatched deep nesting
    it('Test case 17: should return false if deeply nested subset does not match the object', () => {
        const subset = { a: { b: { c: { d: 2 } } } };
        const obj = { a: { b: { c: { d: 1, e: 2 } }, f: 3 }, g: 4 };
        const result = isDeepSubset(subset, obj);
        expect(result).toBe(false);
    });

    // Error-handling test cases
    // Test case 18: Handle non-object subset
    it('Test case 18: should throw a TypeError if subset is not an object', () => {
        expect(() => isDeepSubset(null as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 19: Handle non-object obj
    it('Test case 19: should throw a TypeError if obj is not an object', () => {
        expect(() => isDeepSubset({ a: 1 }, null as any)).toThrow(TypeError);
    });

    // Test case 20: Handle both subset and obj as non-objects
    it('Test case 20: should throw a TypeError if both subset and obj are not objects', () => {
        expect(() => isDeepSubset(null as any, null as any)).toThrow(TypeError);
    });
});