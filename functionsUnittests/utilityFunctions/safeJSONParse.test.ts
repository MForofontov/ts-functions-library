import { safeJSONParse } from '../../utilityFunctions/safeJSONParse';

describe('safeJSONParse', () => {
  // Test case 1: Parse valid JSON string
  it('1. should parse valid JSON string correctly', () => {
    const jsonString: string = '{"name":"John","age":30}';
    const defaultValue = {};
    const expected = { name: 'John', age: 30 };
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 2: Return default value for invalid JSON
  it('2. should return default value for invalid JSON', () => {
    const jsonString: string = 'Invalid JSON';
    const defaultValue = { error: 'default' };
    const expected = { error: 'default' };
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 3: Parse valid JSON array
  it('3. should parse valid JSON array correctly', () => {
    const jsonString: string = '[1, 2, 3, "test"]';
    const defaultValue: any[] = [];
    const expected = [1, 2, 3, 'test'];
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 4: Parse valid JSON with nested objects
  it('4. should parse valid JSON with nested objects correctly', () => {
    const jsonString: string = '{"user":{"name":"John","details":{"age":30,"city":"NYC"}}}';
    const defaultValue = {};
    const expected = { user: { name: 'John', details: { age: 30, city: 'NYC' } } };
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 5: Parse JSON with null values
  it('5. should parse JSON with null values correctly', () => {
    const jsonString: string = '{"name":null,"age":30}';
    const defaultValue = {};
    const expected = { name: null, age: 30 };
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 6: Parse JSON with boolean values
  it('6. should parse JSON with boolean values correctly', () => {
    const jsonString: string = '{"active":true,"disabled":false}';
    const defaultValue = {};
    const expected = { active: true, disabled: false };
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 7: Return default value for empty string
  it('7. should return default value for empty string', () => {
    const jsonString: string = '';
    const defaultValue: string = 'default';
    const expected: string = 'default';
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toBe(expected);
  });

  // Test case 8: Return default value for malformed JSON
  it('8. should return default value for malformed JSON', () => {
    const jsonString: string = '{"name":"John","age":}';
    const defaultValue = { error: true };
    const expected = { error: true };
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 9: Parse JSON with number values
  it('9. should parse JSON with number values correctly', () => {
    const jsonString: string = '{"integer":42,"float":3.14,"negative":-10}';
    const defaultValue = {};
    const expected = { integer: 42, float: 3.14, negative: -10 };
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 10: Parse JSON with special characters
  it('10. should parse JSON with special characters correctly', () => {
    const jsonString: string = '{"message":"Hello\\nWorld","symbol":"@#$%"}';
    const defaultValue = {};
    const expected = { message: 'Hello\nWorld', symbol: '@#$%' };
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 11: Return default value for unclosed JSON
  it('11. should return default value for unclosed JSON', () => {
    const jsonString: string = '{"name":"John"';
    const defaultValue = null;
    const expected = null;
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toBe(expected);
  });

  // Test case 12: Parse JSON with unicode characters
  it('12. should parse JSON with unicode characters correctly', () => {
    const jsonString: string = '{"emoji":"😀","chinese":"你好"}';
    const defaultValue = {};
    const expected = { emoji: '😀', chinese: '你好' };
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 13: Return default value for trailing comma
  it('13. should return default value for trailing comma', () => {
    const jsonString: string = '{"name":"John","age":30,}';
    const defaultValue = 'error';
    const expected = 'error';
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toBe(expected);
  });

  // Test case 14: Parse JSON with empty object
  it('14. should parse JSON with empty object correctly', () => {
    const jsonString: string = '{}';
    const defaultValue = { default: true };
    const expected = {};
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 15: Parse JSON with empty array
  it('15. should parse JSON with empty array correctly', () => {
    const jsonString: string = '[]';
    const defaultValue = ['default'];
    const expected: any[] = [];
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toEqual(expected);
  });

  // Test case 16: Parse JSON primitive values
  it('16. should parse JSON primitive values correctly', () => {
    const jsonString: string = '"hello"';
    const defaultValue = 'default';
    const expected = 'hello';
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toBe(expected);
  });

  // Test case 17: Parse JSON number primitive
  it('17. should parse JSON number primitive correctly', () => {
    const jsonString: string = '42';
    const defaultValue = 0;
    const expected = 42;
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toBe(expected);
  });

  // Test case 18: Parse JSON boolean primitive
  it('18. should parse JSON boolean primitive correctly', () => {
    const jsonString: string = 'true';
    const defaultValue = false;
    const expected = true;
    const result = safeJSONParse(jsonString, defaultValue);
    expect(result).toBe(expected);
  });
});