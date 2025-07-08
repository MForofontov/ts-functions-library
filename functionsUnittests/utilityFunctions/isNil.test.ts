import { isNil } from '../../utilityFunctions/isNil';

describe('isNil', () => {
  // Test case 1: Check null value
  it('1. should return true for null value', () => {
    const value = null;
    const expected: boolean = true;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 2: Check undefined value
  it('2. should return true for undefined value', () => {
    const value = undefined;
    const expected: boolean = true;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 3: Check zero value
  it('3. should return false for zero value', () => {
    const value: number = 0;
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 4: Check empty string
  it('4. should return false for empty string', () => {
    const value: string = '';
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 5: Check false value
  it('5. should return false for false value', () => {
    const value: boolean = false;
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 6: Check NaN value
  it('6. should return false for NaN value', () => {
    const value: number = NaN;
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 7: Check positive number
  it('7. should return false for positive number', () => {
    const value: number = 42;
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 8: Check negative number
  it('8. should return false for negative number', () => {
    const value: number = -42;
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 9: Check non-empty string
  it('9. should return false for non-empty string', () => {
    const value: string = 'test';
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 10: Check true value
  it('10. should return false for true value', () => {
    const value: boolean = true;
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 11: Check empty object
  it('11. should return false for empty object', () => {
    const value: object = {};
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 12: Check empty array
  it('12. should return false for empty array', () => {
    const value: any[] = [];
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 13: Check function
  it('13. should return false for function', () => {
    const value: Function = () => {};
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 14: Check Date object
  it('14. should return false for Date object', () => {
    const value: Date = new Date();
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 15: Check symbol
  it('15. should return false for symbol', () => {
    const value: symbol = Symbol('test');
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 16: Check Infinity
  it('16. should return false for Infinity', () => {
    const value: number = Infinity;
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 17: Check negative Infinity
  it('17. should return false for negative Infinity', () => {
    const value: number = -Infinity;
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });

  // Test case 18: Check object with null property
  it('18. should return false for object with null property', () => {
    const value: object = { prop: null };
    const expected: boolean = false;
    const result: boolean = isNil(value);
    expect(result).toBe(expected);
  });
});