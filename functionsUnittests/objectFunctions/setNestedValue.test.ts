import { setNestedValue } from '../../objectFunctions/setNestedValue';

describe('setNestedValue', () => {
    // Test case 1: Set a nested value in an object
    it('1. should set a nested value in an object', () => {
        const obj = { a: { b: { c: 42 } } };
        setNestedValue(obj, 'a.b.c', 100);
        const expected = { a: { b: { c: 100 } } };
        expect(obj).toEqual(expected);
    });

    // Test case 2: Create nested structure if it does not exist
    it('2. should create nested structure if it does not exist', () => {
        const obj = {};
        setNestedValue(obj, 'a.b.c', 100);
        const expected = { a: { b: { c: 100 } } };
        expect(obj).toEqual(expected);
    });

    // Test case 3: Overwrite existing value
    it('3. should overwrite existing value', () => {
        const obj = { a: { b: { c: 42 } } };
        setNestedValue(obj, 'a.b.c', 100);
        const expected = { a: { b: { c: 100 } } };
        expect(obj).toEqual(expected);
    });

    // Test case 4: Handle non-object input (number)
    it('4. should throw a TypeError if input is a number', () => {
        expect(() => setNestedValue(42 as any, 'a.b.c', 100)).toThrow(TypeError);
    });

    // Test case 5: Handle non-object input (string)
    it('5. should throw a TypeError if input is a string', () => {
        expect(() => setNestedValue('string' as any, 'a.b.c', 100)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (boolean)
    it('6. should throw a TypeError if input is a boolean', () => {
        expect(() => setNestedValue(true as any, 'a.b.c', 100)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (null)
    it('7. should throw a TypeError if input is null', () => {
        expect(() => setNestedValue(null as any, 'a.b.c', 100)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (undefined)
    it('8. should throw a TypeError if input is undefined', () => {
        expect(() => setNestedValue(undefined as any, 'a.b.c', 100)).toThrow(TypeError);
    });

    // Test case 9: Set a value in an array within an object
    it('9. should set a value in an array within an object', () => {
        const obj = { a: { b: [1, 2, 3] } };
        setNestedValue(obj, 'a.b.1', 100);
        const expected = { a: { b: [1, 100, 3] } };
        expect(obj).toEqual(expected);
    });

    // Test case 10: Create nested structure with arrays if it does not exist
    it('10. should create nested structure with arrays if it does not exist', () => {
        const obj = {};
        setNestedValue(obj, 'a.b.0.c', 100);
        const expected = { a: { b: [{ c: 100 }] } };
        expect(obj).toEqual(expected);
    });
});
