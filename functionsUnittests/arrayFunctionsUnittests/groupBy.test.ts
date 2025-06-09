import { groupBy } from '../../arrayFunctions/groupBy';

describe('groupBy', () => {
  // Test case 1: Normal array of objects
  it('1. should group a normal array of objects by a specific property', () => {
    const arr: { name: string; age: number }[] = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 30 },
    ];
    const result = groupBy(arr, 'age');
    expect(result).toEqual({
      '25': [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 25 },
      ],
      '30': [{ name: 'Charlie', age: 30 }],
    });
  });

  // Test case 2: Empty array
  it('2. should return an empty object when the array is empty', () => {
    const arr: { name: string; age: number }[] = [];
    const result = groupBy(arr, 'age');
    expect(result).toEqual({});
  });

  // Test case 3: Array of objects with different types of values
  it('3. should group an array of objects with different types of values', () => {
    const arr: { name: string; value: number | string | boolean }[] = [
      { name: 'Alice', value: 25 },
      { name: 'Bob', value: '25' },
      { name: 'Charlie', value: true },
    ];
    const result = groupBy(arr, 'value');
    expect(result).toEqual({
      '25': [
        { name: 'Alice', value: 25 },
        { name: 'Bob', value: '25' },
      ],
      true: [{ name: 'Charlie', value: true }],
    });
  });

  // Test case 4: Array of objects with nested properties
  it('4. should group an array of objects with nested properties', () => {
    const arr: { name: string; details: { age: number } }[] = [
      { name: 'Alice', details: { age: 25 } },
      { name: 'Bob', details: { age: 25 } },
      { name: 'Charlie', details: { age: 30 } },
    ];
    const result = groupBy(arr, 'details');
    expect(result).toEqual({
      '[object Object]': [
        { name: 'Alice', details: { age: 25 } },
        { name: 'Bob', details: { age: 25 } },
        { name: 'Charlie', details: { age: 30 } },
      ],
    });
  });

  // Test case 5: Array of objects with null and undefined values
  it('5. should group an array of objects with null and undefined values', () => {
    const arr: { name: string; value: number | null | undefined }[] = [
      { name: 'Alice', value: null },
      { name: 'Bob', value: undefined },
      { name: 'Charlie', value: 25 },
    ];
    const result = groupBy(arr, 'value');
    expect(result).toEqual({
      null: [{ name: 'Alice', value: null }],
      undefined: [{ name: 'Bob', value: undefined }],
      '25': [{ name: 'Charlie', value: 25 }],
    });
  });

  // Test case 6: Array of objects with NaN values
  it('6. should group an array of objects with NaN values', () => {
    const arr: { name: string; value: number }[] = [
      { name: 'Alice', value: NaN },
      { name: 'Bob', value: NaN },
      { name: 'Charlie', value: 25 },
    ];
    const result = groupBy(arr, 'value');
    expect(result).toEqual({
      NaN: [
        { name: 'Alice', value: NaN },
        { name: 'Bob', value: NaN },
      ],
      '25': [{ name: 'Charlie', value: 25 }],
    });
  });

  // Test case 7: Array of objects with special characters in keys
  it('7. should group an array of objects with special characters in keys', () => {
    const arr: { name: string; 'special-key': string }[] = [
      { name: 'Alice', 'special-key': '@' },
      { name: 'Bob', 'special-key': '#' },
      { name: 'Charlie', 'special-key': '@' },
    ];
    const result = groupBy(arr, 'special-key');
    expect(result).toEqual({
      '@': [
        { name: 'Alice', 'special-key': '@' },
        { name: 'Charlie', 'special-key': '@' },
      ],
      '#': [{ name: 'Bob', 'special-key': '#' }],
    });
  });

  // Test case 8: Array of objects with symbols as keys
  it('8. should group an array of objects with symbols as keys', () => {
    const sym1: symbol = Symbol('sym1');
    const sym2: symbol = Symbol('sym2');
    const arr: { name: string; key: symbol }[] = [
      { name: 'Alice', key: sym1 },
      { name: 'Bob', key: sym2 },
      { name: 'Charlie', key: sym1 },
    ];
    const result = groupBy(arr, 'key');
    expect(result).toEqual({
      [String(sym1)]: [
        { name: 'Alice', key: sym1 },
        { name: 'Charlie', key: sym1 },
      ],
      [String(sym2)]: [{ name: 'Bob', key: sym2 }],
    });
  });

  // Test case 9: Array of objects with dates as values
  it('9. should group an array of objects with dates as values', () => {
    const date1: Date = new Date(2020, 0, 1);
    const date2: Date = new Date(2021, 0, 1);
    const arr: { name: string; date: Date }[] = [
      { name: 'Alice', date: date1 },
      { name: 'Bob', date: date2 },
      { name: 'Charlie', date: date1 },
    ];
    const result = groupBy(arr, 'date');
    expect(result).toEqual({
      [String(date1)]: [
        { name: 'Alice', date: date1 },
        { name: 'Charlie', date: date1 },
      ],
      [String(date2)]: [{ name: 'Bob', date: date2 }],
    });
  });

  // Test case 10: Array of objects with functions as values
  it('10. should group an array of objects with functions as values', () => {
    const func1: () => number = () => 1;
    const func2: () => number = () => 2;
    const arr: { name: string; func: () => number }[] = [
      { name: 'Alice', func: func1 },
      { name: 'Bob', func: func2 },
      { name: 'Charlie', func: func1 },
    ];
    const result = groupBy(arr, 'func');
    expect(result).toEqual({
      [String(func1)]: [
        { name: 'Alice', func: func1 },
        { name: 'Charlie', func: func1 },
      ],
      [String(func2)]: [{ name: 'Bob', func: func2 }],
    });
  });

  // Test case 11: Large array of objects
  it('11. should group a large array of objects by a specific property', () => {
    const arr: { name: string; age: number }[] = Array.from(
      { length: 1000 },
      (_, i) => ({
        name: `Person ${i}`,
        age: i % 10,
      }),
    );
    const result = groupBy(arr, 'age');
    for (let i = 0; i < 10; i++) {
      expect(result[String(i)].length).toBe(100);
    }
  });
});
