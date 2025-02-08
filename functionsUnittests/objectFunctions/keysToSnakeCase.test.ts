import { keysToSnakeCase } from '../../objectFunctions/keysToSnakeCase';

describe('keysToSnakeCase', () => {
    // Test case 1: Convert keys of a simple object
    it('1. should convert keys of a simple object to snake_case', () => {
        const obj = { firstName: 'John', lastName: 'Doe' };
        const result = keysToSnakeCase(obj);
        const expected = { first_name: 'John', last_name: 'Doe' };
        expect(result).toEqual(expected);
    });

    // Test case 2: Convert keys of a nested object
    it('2. should convert keys of a nested object to snake_case', () => {
        const obj = { userInfo: { firstName: 'John', lastName: 'Doe' } };
        const result = keysToSnakeCase(obj);
        const expected = { user_info: { first_name: 'John', last_name: 'Doe' } };
        expect(result).toEqual(expected);
    });

    // Test case 3: Convert keys of an array of objects
    it('3. should convert keys of an array of objects to snake_case', () => {
        const arr = [{ firstName: 'John' }, { lastName: 'Doe' }];
        const result = keysToSnakeCase(arr);
        const expected = [{ first_name: 'John' }, { last_name: 'Doe' }];
        expect(result).toEqual(expected);
    });

    // Test case 4: Handle non-object input (number)
    it('4. should return the input if it is a number', () => {
        const input = 42;
        const result = keysToSnakeCase(input);
        const expected = 42;
        expect(result).toBe(expected);
    });

    // Test case 5: Handle non-object input (string)
    it('5. should return the input if it is a string', () => {
        const input = 'string';
        const result = keysToSnakeCase(input);
        const expected = 'string';
        expect(result).toBe(expected);
    });

    // Test case 6: Handle non-object input (boolean)
    it('6. should return the input if it is a boolean', () => {
        const input = true;
        const result = keysToSnakeCase(input);
        const expected = true;
        expect(result).toBe(expected);
    });

    // Test case 7: Handle non-object input (null)
    it('7. should return the input if it is null', () => {
        const input = null;
        const result = keysToSnakeCase(input);
        const expected = null;
        expect(result).toBe(expected);
    });

    // Test case 8: Handle non-object input (undefined)
    it('8. should return the input if it is undefined', () => {
        const input = undefined;
        const result = keysToSnakeCase(input);
        const expected = undefined;
        expect(result).toBe(expected);
    });

    // Test case 9: Convert keys with mixed cases
    it('9. should convert keys with mixed cases to snake_case', () => {
        const obj = { firstName: 'John', LastName: 'Doe' };
        const result = keysToSnakeCase(obj);
        const expected = { first_name: 'John', last_name: 'Doe' };
        expect(result).toEqual(expected);
    });
});
