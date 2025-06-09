import { pickBy } from '../../objectFunctions/pickBy';

describe('pickBy', () => {
  // Test case 1: Pick properties based on value
  it('Test case 1: should pick properties based on value', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pickBy(obj, (value) => value > 1);
    const expected = { b: 2, c: 3 };
    expect(result).toEqual(expected);
  });

  // Test case 2: Pick properties based on key
  it('Test case 2: should pick properties based on key', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pickBy(obj, (value, key) => key === 'b');
    const expected = { b: 2 };
    expect(result).toEqual(expected);
  });

  // Test case 3: Pick properties with different data types
  it('Test case 3: should pick properties with different data types', () => {
    const obj = { a: 1, b: 'string', c: true, d: null };
    const result = pickBy(obj, (value) => typeof value === 'string');
    const expected = { b: 'string' };
    expect(result).toEqual(expected);
  });

  // Test case 4: Pick no properties if predicate always returns false
  it('Test case 4: should pick no properties if predicate always returns false', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pickBy(obj, () => false);
    const expected = {};
    expect(result).toEqual(expected);
  });

  // Test case 5: Pick all properties if predicate always returns true
  it('Test case 5: should pick all properties if predicate always returns true', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pickBy(obj, () => true);
    const expected = { a: 1, b: 2, c: 3 };
    expect(result).toEqual(expected);
  });

  // Test case 6: Pick properties from an object with nested objects
  it('Test case 6: should pick properties from an object with nested objects', () => {
    const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
    const result = pickBy(obj, (value) => typeof value === 'object');
    const expected = { b: { c: 2, d: 3 } };
    expect(result).toEqual(expected);
  });

  // Test case 7: Pick properties from an object with Date objects
  it('Test case 7: should pick properties from an object with Date objects', () => {
    const date = new Date();
    const obj = { a: 1, b: date, c: 3 };
    const result = pickBy(obj, (value) => value instanceof Date);
    const expected = { b: date };
    expect(result).toEqual(expected);
  });

  // Test case 8: Handle non-object input (number)
  it('Test case 8: should throw a TypeError if input is a number', () => {
    expect(() => pickBy(42 as any, (value) => value)).toThrow(TypeError);
  });

  // Test case 9: Handle non-object input (string)
  it('Test case 9: should throw a TypeError if input is a string', () => {
    expect(() => pickBy('string' as any, (value) => value)).toThrow(TypeError);
  });

  // Test case 10: Handle non-object input (boolean)
  it('Test case 10: should throw a TypeError if input is a boolean', () => {
    expect(() => pickBy(true as any, (value) => value)).toThrow(TypeError);
  });

  // Test case 11: Handle null input
  it('Test case 11: should throw a TypeError if input is null', () => {
    expect(() => pickBy(null as any, (value) => value)).toThrow(TypeError);
  });

  // Test case 12: Handle undefined input
  it('Test case 12: should throw a TypeError if input is undefined', () => {
    expect(() => pickBy(undefined as any, (value) => value)).toThrow(TypeError);
  });
});
