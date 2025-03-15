import { groupBy } from '../../objectFunctions/groupBy';

describe('groupBy', () => {
    // Test case 1: Group by a string key
    it('Test case 1: should group by a string key', () => {
        const array = [
            { category: 'fruit', name: 'apple' },
            { category: 'fruit', name: 'banana' },
            { category: 'vegetable', name: 'carrot' }
        ];
        const result = groupBy(array, 'category');
        const expected = {
            fruit: [
                { category: 'fruit', name: 'apple' },
                { category: 'fruit', name: 'banana' }
            ],
            vegetable: [{ category: 'vegetable', name: 'carrot' }]
        };
        expect(result).toEqual(expected);
    });

    // Test case 2: Group by a number key
    it('Test case 2: should group by a number key', () => {
        const array = [
            { id: 1, name: 'apple' },
            { id: 2, name: 'banana' },
            { id: 1, name: 'carrot' }
        ];
        const result = groupBy(array, 'id');
        const expected = {
            '1': [
                { id: 1, name: 'apple' },
                { id: 1, name: 'carrot' }
            ],
            '2': [{ id: 2, name: 'banana' }]
        };
        expect(result).toEqual(expected);
    });

    // Test case 3: Group by a boolean key
    it('Test case 3: should group by a boolean key', () => {
        const array = [
            { isFruit: true, name: 'apple' },
            { isFruit: true, name: 'banana' },
            { isFruit: false, name: 'carrot' }
        ];
        const result = groupBy(array, 'isFruit');
        const expected = {
            'true': [
                { isFruit: true, name: 'apple' },
                { isFruit: true, name: 'banana' }
            ],
            'false': [{ isFruit: false, name: 'carrot' }]
        };
        expect(result).toEqual(expected);
    });

    // Test case 4: Group by a key with undefined values
    it('Test case 4: should group by a key with undefined values', () => {
        const array = [
            { category: 'fruit', name: 'apple' },
            { category: undefined, name: 'banana' },
            { category: 'vegetable', name: 'carrot' }
        ];
        const result = groupBy(array, 'category');
        const expected = {
            fruit: [{ category: 'fruit', name: 'apple' }],
            undefined: [{ category: undefined, name: 'banana' }],
            vegetable: [{ category: 'vegetable', name: 'carrot' }]
        };
        expect(result).toEqual(expected);
    });

    // Test case 5: Group by a key with null values
    it('Test case 5: should group by a key with null values', () => {
        const array = [
            { category: 'fruit', name: 'apple' },
            { category: null, name: 'banana' },
            { category: 'vegetable', name: 'carrot' }
        ];
        const result = groupBy(array, 'category');
        const expected = {
            fruit: [{ category: 'fruit', name: 'apple' }],
            null: [{ category: null, name: 'banana' }],
            vegetable: [{ category: 'vegetable', name: 'carrot' }]
        };
        expect(result).toEqual(expected);
    });

    // Test case 6: Handle empty array
    it('Test case 6: should return an empty object for an empty array', () => {
        const array: any[] = [];
        const result = groupBy(array, 'category');
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 7: Handle array with no matching key
    it('Test case 7: should return an empty object if key does not exist', () => {
        const array = [
            { category: 'fruit', name: 'apple' },
            { category: 'fruit', name: 'banana' },
            { category: 'vegetable', name: 'carrot' }
        ];
        const result = groupBy(array, 'nonExistentKey' as keyof typeof array[0]);
        const expected = {};
        expect(result).toEqual(expected);
    });

    // Test case 8: Handle array with mixed types
    it('Test case 8: should group by a key with mixed types', () => {
        const array = [
            { category: 'fruit', name: 'apple' },
            { category: 1, name: 'banana' },
            { category: 'vegetable', name: 'carrot' }
        ];
        const result = groupBy(array, 'category');
        const expected = {
            fruit: [{ category: 'fruit', name: 'apple' }],
            '1': [{ category: 1, name: 'banana' }],
            vegetable: [{ category: 'vegetable', name: 'carrot' }]
        };
        expect(result).toEqual(expected);
    });

    // Test case 9: Handle non-array input (number)
    it('Test case 9: should throw a TypeError if input is not an array', () => {
        expect(() => groupBy(42 as any, 'category')).toThrow(TypeError);
    });

    // Test case 10: Handle non-array input (string)
    it('Test case 10: should throw a TypeError if input is a string', () => {
        expect(() => groupBy('string' as any, 'category')).toThrow(TypeError);
    });

    // Test case 11: Handle non-array input (boolean)
    it('Test case 11: should throw a TypeError if input is a boolean', () => {
        expect(() => groupBy(true as any, 'category')).toThrow(TypeError);
    });

    // Test case 12: Handle null input
    it('Test case 12: should throw a TypeError if input is null', () => {
        expect(() => groupBy(null as any, 'category')).toThrow(TypeError);
    });

    // Test case 13: Handle undefined input
    it('Test case 13: should throw a TypeError if input is undefined', () => {
        expect(() => groupBy(undefined as any, 'category')).toThrow(TypeError);
    });
});