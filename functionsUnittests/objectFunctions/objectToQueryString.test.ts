import { objectToQueryString } from '../../objectFunctions/objectToQueryString';

describe('objectToQueryString', () => {
    // Test case 1: Convert a simple object to a query string
    it('1. should convert a simple object to a query string', () => {
        const obj = { name: 'John Doe', age: 30 };
        const result = objectToQueryString(obj);
        const expected = 'name=John%20Doe&age=30';
        expect(result).toBe(expected);
    });

    // Test case 2: Convert an object with special characters to a query string
    it('2. should convert an object with special characters to a query string', () => {
        const obj = { name: 'John Doe', city: 'New York', 'special&char': 'value' };
        const result = objectToQueryString(obj);
        const expected = 'name=John%20Doe&city=New%20York&special%26char=value';
        expect(result).toBe(expected);
    });

    // Test case 3: Convert an object with various data types to a query string
    it('3. should convert an object with various data types to a query string', () => {
        const obj = { name: 'John Doe', age: 30, active: true, nullValue: null, undefinedValue: undefined };
        const result = objectToQueryString(obj);
        const expected = 'name=John%20Doe&age=30&active=true&nullValue=null&undefinedValue=undefined';
        expect(result).toBe(expected);
    });

    // Test case 4: Convert an object with nested objects to a query string
    it('4. should convert an object with nested objects to a query string', () => {
        const obj = { user: { name: 'John Doe', age: 30 }, active: true };
        const result = objectToQueryString(obj);
        const expected = 'user=%5Bobject%20Object%5D&active=true';
        expect(result).toBe(expected);
    });

    // Test case 5: Convert an object with arrays to a query string
    it('5. should convert an object with arrays to a query string', () => {
        const obj = { names: ['John', 'Doe'], ages: [30, 25] };
        const result = objectToQueryString(obj);
        const expected = 'names=John%2CDoe&ages=30%2C25';
        expect(result).toBe(expected);
    });

    // Test case 6: Handle non-object input (number)
    it('6. should throw a TypeError if input is a number', () => {
        expect(() => objectToQueryString(42 as any)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (string)
    it('7. should throw a TypeError if input is a string', () => {
        expect(() => objectToQueryString('string' as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (boolean)
    it('8. should throw a TypeError if input is a boolean', () => {
        expect(() => objectToQueryString(true as any)).toThrow(TypeError);
    });

    // Test case 9: Handle non-object input (null)
    it('9. should throw a TypeError if input is null', () => {
        expect(() => objectToQueryString(null as any)).toThrow(TypeError);
    });

    // Test case 10: Handle non-object input (undefined)
    it('10. should throw a TypeError if input is undefined', () => {
        expect(() => objectToQueryString(undefined as any)).toThrow(TypeError);
    });
});
