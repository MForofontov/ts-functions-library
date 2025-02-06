import { objectToQueryString } from '../../objectFunctions/objectToQueryString';

describe('objectToQueryString', () => {
    // Test case 1: Serialize a simple object
    it('1. should serialize a simple object', () => {
        const obj = { name: 'John', age: 30 };
        const result = objectToQueryString(obj);
        const expected = '?name=John&age=30';
        expect(result).toBe(expected);
    });

    // Test case 2: Serialize an object with special characters
    it('2. should serialize an object with special characters', () => {
        const obj = { name: 'John Doe', city: 'New York' };
        const result = objectToQueryString(obj);
        const expected = '?name=John%20Doe&city=New%20York';
        expect(result).toBe(expected);
    });

    // Test case 3: Serialize an object with array values
    it('3. should serialize an object with array values', () => {
        const obj = { name: 'John', hobbies: ['reading', 'swimming'] };
        const result = objectToQueryString(obj);
        const expected = '?name=John&hobbies=reading%2Cswimming';
        expect(result).toBe(expected);
    });

    // Test case 4: Serialize an empty object
    it('4. should serialize an empty object', () => {
        const obj = {};
        const result = objectToQueryString(obj);
        const expected = '?';
        expect(result).toBe(expected);
    });

    // Test case 5: Handle non-object input (number)
    it('5. should throw a TypeError if input is a number', () => {
        expect(() => objectToQueryString(42 as any)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (string)
    it('6. should throw a TypeError if input is a string', () => {
        expect(() => objectToQueryString('string' as any)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (boolean)
    it('7. should throw a TypeError if input is a boolean', () => {
        expect(() => objectToQueryString(true as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (null)
    it('8. should throw a TypeError if input is null', () => {
        expect(() => objectToQueryString(null as any)).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (undefined)
    it('9. should throw a TypeError if input is undefined', () => {
        expect(() => objectToQueryString(undefined as any)).toThrow(TypeError);
    });
});
