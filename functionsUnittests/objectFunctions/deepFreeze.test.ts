import { deepFreeze } from '../../objectFunctions/deepFreeze';

describe('deepFreeze', () => {
    // Test case 1: Deep freeze a simple object
    it('1. should deep freeze a simple object', () => {
        const obj = { a: 1, b: 2 };
        const result = deepFreeze(obj);
        expect(Object.isFrozen(result)).toBe(true);
        expect(() => { (result as any).a = 3; }).toThrow(TypeError);
    });

    // Test case 2: Deep freeze a nested object
    it('2. should deep freeze a nested object', () => {
        const obj = { a: 1, b: { c: 2, d: 3 } };
        const result = deepFreeze(obj);
        expect(Object.isFrozen(result)).toBe(true);
        expect(Object.isFrozen(result.b)).toBe(true);
        expect(() => { (result.b as any).c = 4; }).toThrow(TypeError);
    });

    // Test case 3: Deep freeze an array
    it('3. should deep freeze an array', () => {
        const arr = [1, 2, { a: 3 }];
        const result = deepFreeze(arr);
        expect(Object.isFrozen(result)).toBe(true);
        expect(Object.isFrozen(result[2])).toBe(true);
        expect(() => { (result[2] as any).a = 4; }).toThrow(TypeError);
    });

    // Test case 4: Handle non-object input (number)
    it('4. should throw a TypeError if input is a number', () => {
        expect(() => deepFreeze(42 as any)).toThrow(TypeError);
    });

    // Test case 5: Handle non-object input (string)
    it('5. should throw a TypeError if input is a string', () => {
        expect(() => deepFreeze('string' as any)).toThrow(TypeError);
    });

    // Test case 6: Handle non-object input (boolean)
    it('6. should throw a TypeError if input is a boolean', () => {
        expect(() => deepFreeze(true as any)).toThrow(TypeError);
    });

    // Test case 7: Handle non-object input (null)
    it('7. should throw a TypeError if input is null', () => {
        expect(() => deepFreeze(null as any)).toThrow(TypeError);
    });

    // Test case 8: Handle non-object input (undefined)
    it('8. should throw a TypeError if input is undefined', () => {
        expect(() => deepFreeze(undefined as any)).toThrow(TypeError);
    });
});
