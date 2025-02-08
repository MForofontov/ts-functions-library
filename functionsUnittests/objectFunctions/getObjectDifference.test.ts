import { getObjectDifference } from '../../objectFunctions/getObjectDifference';

describe('getObjectDifference', () => {
    // Test case 1: Get difference between two objects with different values
    it('1. should return the difference between two objects with different values', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 1, b: 3, c: 3 };
        const result = getObjectDifference(obj1, obj2);
        const expected = { b: 2 };
        expect(result).toEqual(expected);
    });

    // Test case 2: Get difference between two identical objects
    it('2. should return an empty object for two identical objects', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 1, b: 2, c: 3 };
        const result = getObjectDifference(obj1, obj2);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 3: Get difference between two objects with different keys
    it('3. should return the difference for objects with different keys', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, c: 3 };
        const result = getObjectDifference(obj1, obj2);
        const expected = { b: 2 };
        expect(result).toEqual(expected);
    });

    // Test case 4: Handle non-object input (number)
    it('4. should throw a TypeError if the first input is a number', () => {
        expect(() => getObjectDifference(42 as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 5: Handle non-object input (string)
    it('5. should throw a TypeError if the first input is a string', () => {
        expect(() => getObjectDifference('string' as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (boolean)
    it('6. should throw a TypeError if the first input is a boolean', () => {
        expect(() => getObjectDifference(true as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (null)
    it('7. should throw a TypeError if the first input is null', () => {
        expect(() => getObjectDifference(null as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (undefined)
    it('8. should throw a TypeError if the first input is undefined', () => {
        expect(() => getObjectDifference(undefined as any, { a: 1 })).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input for the second parameter (number)
    it('9. should throw a TypeError if the second input is a number', () => {
        expect(() => getObjectDifference({ a: 1 }, 42 as any)).toThrow(TypeError);
    });

    // Test case 10: Handle non-object input for the second parameter (string)
    it('10. should throw a TypeError if the second input is a string', () => {
        expect(() => getObjectDifference({ a: 1 }, 'string' as any)).toThrow(TypeError);
    });

    // Test case 11: Handle non-object input for the second parameter (boolean)
    it('11. should throw a TypeError if the second input is a boolean', () => {
        expect(() => getObjectDifference({ a: 1 }, true as any)).toThrow(TypeError);
    });

    // Test case 12: Handle non-object input for the second parameter (null)
    it('12. should throw a TypeError if the second input is null', () => {
        expect(() => getObjectDifference({ a: 1 }, null as any)).toThrow(TypeError);
    });

    // Test case 13: Handle non-object input for the second parameter (undefined)
    it('13. should throw a TypeError if the second input is undefined', () => {
        expect(() => getObjectDifference({ a: 1 }, undefined as any)).toThrow(TypeError);
    });
});
