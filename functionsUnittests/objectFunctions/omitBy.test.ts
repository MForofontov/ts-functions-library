import { omitBy } from '../../objectFunctions/omitBy';

describe('omitBy', () => {
    // Test case 1: Omit properties based on value
    it('Test case 1: should omit properties based on value', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = omitBy(obj, value => value > 1);
        const expected = { a: 1 };
        expect(result).toEqual(expected);
    });

    // Test case 2: Omit properties based on key
    it('Test case 2: should omit properties based on key', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = omitBy(obj, (value, key) => key === 'b');
        const expected = { a: 1, c: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 3: Omit properties with different data types
    it('Test case 3: should omit properties with different data types', () => {
        const obj = { a: 1, b: 'string', c: true, d: null };
        const result = omitBy(obj, value => typeof value === 'string');
        const expected = { a: 1, c: true, d: null };
        expect(result).toEqual(expected);
    });

    // Test case 4: Omit no properties if predicate always returns false
    it('Test case 4: should omit no properties if predicate always returns false', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = omitBy(obj, () => false);
        const expected = { a: 1, b: 2, c: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 5: Omit all properties if predicate always returns true
    it('Test case 5: should omit all properties if predicate always returns true', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = omitBy(obj, () => true);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 6: Omit properties from an object with nested objects
    it('Test case 6: should omit properties from an object with nested objects', () => {
        const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
        const result = omitBy(obj, value => typeof value === 'object');
        const expected = { a: 1, e: 4 };
        expect(result).toEqual(expected);
    });

    // Test case 7: Omit properties from an object with Date objects
    it('Test case 7: should omit properties from an object with Date objects', () => {
        const date = new Date();
        const obj = { a: 1, b: date, c: 3 };
        const result = omitBy(obj, value => value instanceof Date);
        const expected = { a: 1, c: 3 };
        expect(result).toEqual(expected);
    });

    // Test case 8: Handle non-object input (number)
    it('Test case 8: should throw a TypeError if input is a number', () => {
        expect(() => omitBy(42 as any, value => value)).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (string)
    it('Test case 9: should throw a TypeError if input is a string', () => {
        expect(() => omitBy('string' as any, value => value)).toThrow(TypeError);
    });

    // Test case 10: Handle non-object input (boolean)
    it('Test case 10: should throw a TypeError if input is a boolean', () => {
        expect(() => omitBy(true as any, value => value)).toThrow(TypeError);
    });

    // Test case 11: Handle null input
    it('Test case 11: should throw a TypeError if input is null', () => {
        expect(() => omitBy(null as any, value => value)).toThrow(TypeError);
    });

    // Test case 12: Handle undefined input
    it('Test case 12: should throw a TypeError if input is undefined', () => {
        expect(() => omitBy(undefined as any, value => value)).toThrow(TypeError);
    });
});