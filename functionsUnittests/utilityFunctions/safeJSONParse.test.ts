import { safeJSONParse } from '../../utilityFunctions/safeJSONParse';

describe('safeJSONParse', () => {
  // Test case 1: Parse valid JSON object
  it('1. should parse a valid JSON object', () => {
    const json = '{"name":"John"}';
    expect(safeJSONParse(json, {})).toEqual({ name: 'John' });
  });

  // Test case 2: Return default for invalid JSON
  it('2. should return default for invalid JSON', () => {
    expect(safeJSONParse('invalid', { a: 1 })).toEqual({ a: 1 });
  });

  // Test case 3: Parse numeric JSON
  it('3. should parse numeric JSON', () => {
    expect(safeJSONParse('123', 0)).toBe(123);
  });

  // Test case 4: Parse JSON array
  it('4. should parse a JSON array', () => {
    expect(safeJSONParse('[1,2,3]', [])).toEqual([1, 2, 3]);
  });

  // Test case 5: Return default for empty string
  it('5. should return default for empty string', () => {
    expect(safeJSONParse('', { hello: 'world' })).toEqual({ hello: 'world' });
  });
});
