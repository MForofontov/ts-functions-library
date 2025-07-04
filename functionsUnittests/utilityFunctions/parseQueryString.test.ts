import { parseQueryString } from '../../utilityFunctions/parseQueryString';

describe('parseQueryString', () => {
  // Test case 1: Parse a basic query string
  it('1. should parse a basic query string', () => {
    const queryString = '?name=John&age=30';
    const result = parseQueryString(queryString);
    const expected = { name: 'John', age: '30' };
    expect(result).toEqual(expected);
  });

  // Test case 2: Handle empty query string
  it('2. should return an empty object for an empty query string', () => {
    const queryString = '';
    const result = parseQueryString(queryString);
    expect(result).toEqual({});
  });

  // Test case 3: Handle query string with only a question mark
  it('3. should return an empty object for a question mark only', () => {
    const queryString = '?';
    const result = parseQueryString(queryString);
    expect(result).toEqual({});
  });

  // Test case 4: Treat plus signs as spaces
  it('4. should treat plus signs as spaces when decoding', () => {
    const queryString = '?name=John+Doe&city=New+York';
    const result = parseQueryString(queryString);
    const expected = { name: 'John Doe', city: 'New York' };
    expect(result).toEqual(expected);
  });
});
