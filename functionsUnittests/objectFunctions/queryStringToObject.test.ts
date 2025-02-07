import { queryStringToObject } from '../../objectFunctions/queryStringToObject';

describe('queryStringToObject', () => {
    // Test case 1: Convert a simple query string
    it('1. should convert a simple query string', () => {
        const query = 'name=John&age=30';
        const result = queryStringToObject(query);
        const expected = { name: 'John', age: '30' };
        expect(result).toEqual(expected);
    });

    // Test case 2: Convert a query string with special characters
    it('2. should convert a query string with special characters', () => {
        const query = 'name=John%20Doe&city=New%20York';
        const result = queryStringToObject(query);
        const expected = { name: 'John Doe', city: 'New York' };
        expect(result).toEqual(expected);
    });

    // Test case 3: Convert an empty query string
    it('3. should convert an empty query string', () => {
        const query = '';
        const result = queryStringToObject(query);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 4: Handle non-string input (number)
    it('4. should throw a TypeError if input is a number', () => {
        expect(() => queryStringToObject(42 as any)).toThrow(TypeError);
    });

    // Test case 5: Handle non-string input (object)
    it('5. should throw a TypeError if input is an object', () => {
        expect(() => queryStringToObject({} as any)).toThrow(TypeError);
    });

    // Test case 6: Handle non-string input (boolean)
    it('6. should throw a TypeError if input is a boolean', () => {
        expect(() => queryStringToObject(true as any)).toThrow(TypeError);
    });

    // Test case 7: Handle non-string input (null)
    it('7. should throw a TypeError if input is null', () => {
        expect(() => queryStringToObject(null as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-string input (undefined)
    it('8. should throw a TypeError if input is undefined', () => {
        expect(() => queryStringToObject(undefined as any)).toThrow(TypeError);
    });
});
