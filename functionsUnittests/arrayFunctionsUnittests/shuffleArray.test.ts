import { shuffleArray } from '../../arrayFunctions/shuffleArray';

/**
 * Unit tests for the shuffleArray function.
 */
describe('shuffleArray', () => {
  // Test case 1: Shuffling an array of numbers
  test('1. should shuffle an array of numbers', () => {
    const array: number[] = [1, 2, 3, 4, 5];
    const result: number[] = shuffleArray(array);
    expect(result).not.toEqual([1, 2, 3, 4, 5]);
    expect(result.sort()).toEqual([1, 2, 3, 4, 5]);
  });

  // Test case 2: Shuffling an array of strings
  test('2. should shuffle an array of strings', () => {
    const array: string[] = ['a', 'b', 'c', 'd', 'e'];
    const result: string[] = shuffleArray(array);
    expect(result).not.toEqual(['a', 'b', 'c', 'd', 'e']);
    expect(result.sort()).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  // Test case 3: Shuffling an array of mixed types
  test('3. should shuffle an array of mixed types', () => {
    const array: (number | string | boolean)[] = [1, 'two', true, 4, 'five'];
    const result: (number | string | boolean)[] = shuffleArray(array);
    expect(result).not.toEqual([1, 'two', true, 4, 'five']);
    expect(result.sort()).toEqual([1, 4, 'five', 'two', true]);
  });

  // Test case 4: Shuffling an empty array
  test('4. should return an empty array when the input array is empty', () => {
    const array: any[] = [];
    const result: any[] = shuffleArray(array);
    expect(result).toEqual([]);
  });

  // Test case 5: Shuffling an array with one element
  test('5. should return the same array when the input array has one element', () => {
    const array: number[] = [1];
    const result: number[] = shuffleArray(array);
    expect(result).toEqual([1]);
  });

  // Test case 6: Shuffling an array of objects
  test('6. should shuffle an array of objects', () => {
    const array: { id: number; name: string }[] = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    const result: { id: number; name: string }[] = shuffleArray(array);
    expect(result).not.toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ]);
    expect(result.map(obj => obj.id).sort()).toEqual([1, 2, 3]);
  });

  // Test case 7: Shuffling an array of nested arrays
  test('7. should shuffle an array of nested arrays', () => {
    const array: number[][] = [[1, 2], [3, 4], [5, 6]];
    const result: number[][] = shuffleArray(array);
    expect(result).not.toEqual([[1, 2], [3, 4], [5, 6]]);
    expect(result.sort()).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  // Test case 8: Shuffling an array of boolean values
  test('8. should shuffle an array of boolean values', () => {
    const array: boolean[] = [true, false, true, false];
    const result: boolean[] = shuffleArray(array);
    expect(result).not.toEqual([true, false, true, false]);
    expect(result.sort()).toEqual([false, false, true, true]);
  });

  // Test case 9: Shuffling an array of symbols
  test('9. should shuffle an array of symbols', () => {
    const sym1: symbol = Symbol('sym1');
    const sym2: symbol = Symbol('sym2');
    const sym3: symbol = Symbol('sym3');
    const array: symbol[] = [sym1, sym2, sym3];
    const result: symbol[] = shuffleArray(array);
    expect(result).not.toEqual([sym1, sym2, sym3]);
    expect(result.sort()).toEqual([sym1, sym2, sym3]);
  });

  // Test case 10: Shuffling an array of functions
  test('10. should shuffle an array of functions', () => {
    const func1: () => void = () => {};
    const func2: () => void = () => {};
    const func3: () => void = () => {};
    const array: (() => void)[] = [func1, func2, func3];
    const result: (() => void)[] = shuffleArray(array);
    expect(result).not.toEqual([func1, func2, func3]);
    expect(result.sort()).toEqual([func1, func2, func3]);
  });

  // Test case 11: Shuffling an array of dates
  test('11. should shuffle an array of dates', () => {
    const date1: Date = new Date('2021-01-01');
    const date2: Date = new Date('2022-01-01');
    const date3: Date = new Date('2023-01-01');
    const array: Date[] = [date1, date2, date3];
    const result: Date[] = shuffleArray(array);
    expect(result).not.toEqual([date1, date2, date3]);
    expect(result.sort()).toEqual([date1, date2, date3]);
  });

  // Test case 12: Shuffling an array of regular expressions
  test('12. should shuffle an array of regular expressions', () => {
    const regex1: RegExp = /abc/;
    const regex2: RegExp = /def/;
    const regex3: RegExp = /ghi/;
    const array: RegExp[] = [regex1, regex2, regex3];
    const result: RegExp[] = shuffleArray(array);
    expect(result).not.toEqual([regex1, regex2, regex3]);
    expect(result.sort()).toEqual([regex1, regex2, regex3]);
  });

  // Test case 13: Shuffling an array of BigInt values
  test('13. should shuffle an array of BigInt values', () => {
    const array: BigInt[] = [BigInt(1), BigInt(2), BigInt(3)];
    const result: BigInt[] = shuffleArray(array);
    expect(result).not.toEqual([BigInt(1), BigInt(2), BigInt(3)]);
    expect(result.sort()).toEqual([BigInt(1), BigInt(2), BigInt(3)]);
  });

  // Test case 14: Shuffling an array of Infinity and -Infinity
  test('14. should shuffle an array of Infinity and -Infinity', () => {
    const array: number[] = [Infinity, -Infinity, 1, 2, 3];
    const result: number[] = shuffleArray(array);
    expect(result).not.toEqual([Infinity, -Infinity, 1, 2, 3]);
    expect(result.sort()).toEqual([-Infinity, 1, 2, 3, Infinity]);
  });

  // Test case 15: Shuffling an array of NaN values
  test('15. should shuffle an array of NaN values', () => {
    const array: number[] = [NaN, 1, 2, NaN, 3];
    const result: number[] = shuffleArray(array);
    expect(result).not.toEqual([NaN, 1, 2, NaN, 3]);
    expect(result.sort()).toEqual([1, 2, 3, NaN, NaN]);
  });

  // Test case 16: Shuffling an array of mixed data types
  test('16. should shuffle an array of mixed data types', () => {
    const array: (number | string | boolean | null | undefined)[] = [0, 'apple', null, undefined, false, '', 'banana', 3];
    const result: (number | string | boolean | null | undefined)[] = shuffleArray(array);
    expect(result).not.toEqual([0, 'apple', null, undefined, false, '', 'banana', 3]);
    expect(result.sort()).toEqual([0, 3, 'apple', 'banana', false, null, undefined, '']);
  });

  // Test case 17: Shuffling an array of symbols and functions
  test('17. should shuffle an array of symbols and functions', () => {
    const sym1: symbol = Symbol('sym1');
    const func1: () => void = () => {};
    const array: (symbol | (() => void))[] = [sym1, func1, sym1, func1];
    const result: (symbol | (() => void))[] = shuffleArray(array);
    expect(result).not.toEqual([sym1, func1, sym1, func1]);
    expect(result.sort()).toEqual([sym1, func1, sym1, func1]);
  });
});
