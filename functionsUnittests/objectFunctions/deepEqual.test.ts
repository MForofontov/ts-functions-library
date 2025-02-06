import { deepEqual } from '../../objectFunctions/deepEqual';

describe('deepEqual', () => {
    // Test case 1: Compare two identical simple objects
    it('1. should return true for two identical simple objects', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, b: 2 };
        const result = deepEqual(obj1, obj2);
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 2: Compare two different simple objects
    it('2. should return false for two different simple objects', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, b: 3 };
        const result = deepEqual(obj1, obj2);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 3: Compare two identical nested objects
    it('3. should return true for two identical nested objects', () => {
        const obj1 = { a: 1, b: { c: 2, d: 3 } };
        const obj2 = { a: 1, b: { c: 2, d: 3 } };
        const result = deepEqual(obj1, obj2);
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 4: Compare two different nested objects
    it('4. should return false for two different nested objects', () => {
        const obj1 = { a: 1, b: { c: 2, d: 3 } };
        const obj2 = { a: 1, b: { c: 2, d: 4 } };
        const result = deepEqual(obj1, obj2);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 5: Compare two identical arrays
    it('5. should return true for two identical arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];
        const result = deepEqual(arr1, arr2);
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 6: Compare two different arrays
    it('6. should return false for two different arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 4];
        const result = deepEqual(arr1, arr2);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 7: Compare two identical objects with arrays
    it('7. should return true for two identical objects with arrays', () => {
        const obj1 = { a: [1, 2, 3], b: 'test' };
        const obj2 = { a: [1, 2, 3], b: 'test' };
        const result = deepEqual(obj1, obj2);
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 8: Compare two different objects with arrays
    it('8. should return false for two different objects with arrays', () => {
        const obj1 = { a: [1, 2, 3], b: 'test' };
        const obj2 = { a: [1, 2, 4], b: 'test' };
        const result = deepEqual(obj1, obj2);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 9: Compare two identical objects with functions
    it('9. should return true for two identical objects with functions', () => {
        const obj1 = { a: () => 1, b: 'test' };
        const obj2 = { a: () => 1, b: 'test' };
        const result = deepEqual(obj1, obj2);
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 10: Compare two different objects with functions
    it('10. should return false for two different objects with functions', () => {
        const obj1 = { a: () => 1, b: 'test' };
        const obj2 = { a: () => 2, b: 'test' };
        const result = deepEqual(obj1, obj2);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 11: Compare two identical objects with symbols
    it('11. should return true for two identical objects with symbols', () => {
        const obj1 = { a: Symbol('a'), b: 'test' };
        const obj2 = { a: Symbol('a'), b: 'test' };
        const result = deepEqual(obj1, obj2);
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 12: Compare two different objects with symbols
    it('12. should return false for two different objects with symbols', () => {
        const obj1 = { a: Symbol('a'), b: 'test' };
        const obj2 = { a: Symbol('b'), b: 'test' };
        const result = deepEqual(obj1, obj2);
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 13: Compare two identical objects with BigInt values
    it('13. should return true for two identical objects with BigInt values', () => {
        const obj1 = { a: BigInt(1), b: 'test' };
        const obj2 = { a: BigInt(1), b: 'test' };
        const result = deepEqual(obj1, obj2);
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 14: Compare two different objects with BigInt values
    it('14. should return false for two different objects with BigInt values', () => {
        const obj1 = { a: BigInt(1), b: 'test' };
        const obj2 = { a: BigInt(2), b: 'test' };
        const result = deepEqual(obj1, obj2);
        const expected = false;
        expect(result).toBe(expected);
    });
});
