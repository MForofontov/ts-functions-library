import { hasKey } from '../../objectFunctions/hasKey';

describe('hasKey', () => {
    // Test case 1: Check if an object has a specific key
    it('1. should return true if the object has the key', () => {
        const obj = { a: 1, b: 2 };
        const result = hasKey(obj, 'a');
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 2: Check if an object does not have a specific key
    it('2. should return false if the object does not have the key', () => {
        const obj = { a: 1, b: 2 };
        const result = hasKey(obj, 'c');
        const expected = false;
        expect(result).toBe(expected);
    });

    // Test case 3: Check if an object has a key with undefined value
    it('3. should return true if the object has the key with undefined value', () => {
        const obj = { a: undefined };
        const result = hasKey(obj, 'a');
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 4: Check if an object has a key with null value
    it('4. should return true if the object has the key with null value', () => {
        const obj = { a: null };
        const result = hasKey(obj, 'a');
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 5: Handle non-object input (number)
    it('5. should throw a TypeError if input is a number', () => {
        expect(() => hasKey(42 as any, 'a')).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (string)
    it('6. should throw a TypeError if input is a string', () => {
        expect(() => hasKey('string' as any, 'a')).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (boolean)
    it('7. should throw a TypeError if input is a boolean', () => {
        expect(() => hasKey(true as any, 'a')).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (null)
    it('8. should throw a TypeError if input is null', () => {
        expect(() => hasKey(null as any, 'a')).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (undefined)
    it('9. should throw a TypeError if input is undefined', () => {
        expect(() => hasKey(undefined as any, 'a')).toThrow(TypeError);
    });
});
