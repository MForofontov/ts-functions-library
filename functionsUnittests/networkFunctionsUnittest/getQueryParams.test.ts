import { getQueryParams } from '../../networkFunctions/getQueryParams';

/**
 * Unit tests for the getQueryParams function.
 */
describe('getQueryParams', () => {
  // Test case 1: Single query parameter
  it('1. should extract single query parameter', () => {
    const result = getQueryParams('https://example.com?name=John');
    expect(result).toEqual({ name: 'John' });
  });

  // Test case 2: Multiple query parameters
  it('2. should extract multiple query parameters', () => {
    const result = getQueryParams('https://example.com?name=John&age=30');
    expect(result).toEqual({ name: 'John', age: '30' });
  });

  // Test case 3: URL with no query parameters
  it('3. should return empty object for URL with no query', () => {
    const result = getQueryParams('https://example.com/path');
    expect(result).toEqual({});
  });

  // Test case 4: Parameter with encoded value
  it('4. should decode URL-encoded values', () => {
    const result = getQueryParams('https://example.com?message=Hello%20World');
    expect(result).toEqual({ message: 'Hello World' });
  });

  // Test case 5: Multiple values for same parameter (creates array)
  it('5. should handle multiple values for same parameter', () => {
    const result = getQueryParams('https://example.com?tag=js&tag=ts&tag=node');
    expect(result).toEqual({ tag: ['js', 'ts', 'node'] });
  });

  // Test case 6: Empty parameter value
  it('6. should handle empty parameter value', () => {
    const result = getQueryParams('https://example.com?name=&age=30');
    expect(result).toEqual({ name: '', age: '30' });
  });

  // Test case 7: Parameter without value
  it('7. should handle parameter without equals sign', () => {
    const result = getQueryParams('https://example.com?flag');
    expect(result).toEqual({ flag: '' });
  });

  // Test case 8: Error case - non-string input
  it('8. should throw TypeError for non-string input', () => {
    const input = 12345 as unknown as string;
    expect(() => getQueryParams(input)).toThrow(TypeError);
    expect(() => getQueryParams(input)).toThrow('url must be a string');
  });

  // Test case 9: URL with hash and query
  it('9. should extract params ignoring hash fragment', () => {
    const result = getQueryParams('https://example.com?name=John#section');
    expect(result).toEqual({ name: 'John' });
  });

  // Test case 10: Special characters in parameter names
  it('10. should handle special characters in parameter names', () => {
    const result = getQueryParams(
      'https://example.com?user_name=John&user-age=30',
    );
    expect(result).toEqual({ user_name: 'John', 'user-age': '30' });
  });

  // Test case 11: Numeric parameter values
  it('11. should treat numeric values as strings', () => {
    const result = getQueryParams('https://example.com?id=123&count=456');
    expect(result).toEqual({ id: '123', count: '456' });
  });

  // Test case 12: Boolean-like parameter values
  it('12. should treat boolean-like values as strings', () => {
    const result = getQueryParams(
      'https://example.com?enabled=true&active=false',
    );
    expect(result).toEqual({ enabled: 'true', active: 'false' });
  });

  // Test case 13: Complex encoded characters
  it('13. should decode complex encoded characters', () => {
    const result = getQueryParams('https://example.com?emoji=%F0%9F%98%80');
    expect(result).toEqual({ emoji: '😀' });
  });

  // Test case 14: Query with plus signs (spaces)
  it('14. should handle plus signs as spaces', () => {
    const result = getQueryParams('https://example.com?query=hello+world');
    expect(result).toEqual({ query: 'hello world' });
  });

  // Test case 15: Multiple parameters with mixed duplicates
  it('15. should handle mixed single and duplicate parameters', () => {
    const result = getQueryParams(
      'https://example.com?name=John&tag=js&tag=ts&age=30',
    );
    expect(result).toEqual({ name: 'John', tag: ['js', 'ts'], age: '30' });
  });

  // Test case 16: Only query string (no protocol/domain)
  it('16. should throw for invalid URL format', () => {
    expect(() => getQueryParams('?name=John')).toThrow();
  });

  // Test case 17: URL with port and query
  it('17. should extract params from URL with port', () => {
    const result = getQueryParams('http://localhost:8080?api_key=abc123');
    expect(result).toEqual({ api_key: 'abc123' });
  });

  // Test case 18: Empty query string with question mark
  it('18. should return empty object for URL with empty query', () => {
    const result = getQueryParams('https://example.com?');
    expect(result).toEqual({});
  });

  // Test case 19: Parameters with equals in value
  it('19. should handle equals sign in parameter value', () => {
    const result = getQueryParams('https://example.com?equation=a%3Db');
    expect(result).toEqual({ equation: 'a=b' });
  });

  // Test case 20: Many parameters stress test
  it('20. should handle many parameters efficiently', () => {
    const params = Array.from(
      { length: 50 },
      (_, i) => `param${i}=value${i}`,
    ).join('&');
    const result = getQueryParams(`https://example.com?${params}`);
    expect(Object.keys(result).length).toBe(50);
    expect(result.param0).toBe('value0');
    expect(result.param49).toBe('value49');
  });
});
