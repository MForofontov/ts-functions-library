import { pickKeys } from '../../objectFunctions/pickKeys';

describe('pickKeys', () => {
    // Test case 1: Pick a single key from the object
    it('1. should pick a single key from the object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = pickKeys(obj, ['b']);
        const expected = { b: 2 };
        expect(result).toEqual(expected);
    });

    // Test case 2: Pick multiple keys from the object
    it('2. should pick multiple keys from the object', () => {
        const obj = { a: 1, b: 2, c: 3, d: 4 };
        const result = pickKeys(obj, ['b', 'd']);
        const expected = { b: 2, d: 4 };
        expect(result).toEqual(expected);
    });

    // Test case 3: Return an empty object if no keys are picked
    it('3. should return an empty object if no keys are picked', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = pickKeys(obj, []);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 4: Handle non-existent keys gracefully
    it('4. should handle non-existent keys gracefully', () => {
        const obj = { a: 1, b: 2 };
        const result = pickKeys(obj, ['c'] as unknown as (keyof typeof obj)[]);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 5: Handle an empty object
    it('5. should handle an empty object', () => {
        const obj = {};
        const result = pickKeys(obj, ['a'] as unknown as (keyof typeof obj)[]);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 6: Handle objects with different types of values
    it('6. should handle objects with different types of values', () => {
        const obj = { a: 1, b: 'string', c: true, d: null, e: undefined };
        const result = pickKeys(obj, ['b', 'd']);
        const expected = { b: 'string', d: null };
        expect(result).toEqual(expected);
    });
});
