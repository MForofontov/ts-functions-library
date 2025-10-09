import { isSameOrigin } from '../../networkFunctions/isSameOrigin';

/**
 * Unit tests for the isSameOrigin function.
 */
describe('isSameOrigin', () => {
  it('1. should return true for same origin', () => {
    const result = isSameOrigin('https://example.com', 'https://example.com');
    expect(result).toBe(true);
  });

  it('2. should return true for same origin with different paths', () => {
    const result = isSameOrigin(
      'https://example.com/path1',
      'https://example.com/path2',
    );
    expect(result).toBe(true);
  });

  it('3. should return false for different protocols', () => {
    const result = isSameOrigin('http://example.com', 'https://example.com');
    expect(result).toBe(false);
  });

  it('4. should return false for different hosts', () => {
    const result = isSameOrigin('https://example.com', 'https://other.com');
    expect(result).toBe(false);
  });

  it('5. should return false for different ports (explicit)', () => {
    const result = isSameOrigin(
      'https://example.com:8080',
      'https://example.com:9090',
    );
    expect(result).toBe(false);
  });

  it('6. should return false for subdomain difference', () => {
    const result = isSameOrigin(
      'https://www.example.com',
      'https://api.example.com',
    );
    expect(result).toBe(false);
  });

  it('7. should handle same origin with query parameters', () => {
    const result = isSameOrigin(
      'https://example.com?a=1',
      'https://example.com?b=2',
    );
    expect(result).toBe(true);
  });

  it('8. should handle same origin with hashes', () => {
    const result = isSameOrigin(
      'https://example.com#section1',
      'https://example.com#section2',
    );
    expect(result).toBe(true);
  });

  it('9. should treat default HTTPS port as same', () => {
    const result = isSameOrigin(
      'https://example.com',
      'https://example.com:443',
    );
    expect(result).toBe(true);
  });

  it('10. should treat default HTTP port as same', () => {
    const result = isSameOrigin('http://example.com', 'http://example.com:80');
    expect(result).toBe(true);
  });

  it('11. should throw TypeError for non-string url1', () => {
    const url = 123 as unknown as string;
    expect(() => isSameOrigin(url, 'https://example.com')).toThrow(TypeError);
    expect(() => isSameOrigin(url, 'https://example.com')).toThrow(
      'url1 must be a string',
    );
  });

  it('12. should throw TypeError for non-string url2', () => {
    const url = 123 as unknown as string;
    expect(() => isSameOrigin('https://example.com', url)).toThrow(TypeError);
    expect(() => isSameOrigin('https://example.com', url)).toThrow(
      'url2 must be a string',
    );
  });

  it('13. should throw Error for invalid url1', () => {
    expect(() => isSameOrigin('not a url', 'https://example.com')).toThrow(
      'Invalid URL',
    );
  });

  it('14. should throw Error for invalid url2', () => {
    expect(() => isSameOrigin('https://example.com', 'not a url')).toThrow(
      'Invalid URL',
    );
  });

  it('15. should handle IPv4 addresses', () => {
    const result = isSameOrigin('http://192.168.1.1', 'http://192.168.1.1');
    expect(result).toBe(true);
  });

  it('16. should handle IPv6 addresses', () => {
    const result = isSameOrigin('http://[2001:db8::1]', 'http://[2001:db8::1]');
    expect(result).toBe(true);
  });

  it('17. should return false for different IPv4 addresses', () => {
    const result = isSameOrigin('http://192.168.1.1', 'http://192.168.1.2');
    expect(result).toBe(false);
  });

  it('18. should handle localhost', () => {
    const result = isSameOrigin(
      'http://localhost:3000',
      'http://localhost:3000',
    );
    expect(result).toBe(true);
  });

  it('19. should return false for different localhost ports', () => {
    const result = isSameOrigin(
      'http://localhost:3000',
      'http://localhost:4000',
    );
    expect(result).toBe(false);
  });

  it('20. should handle complex URLs', () => {
    const result = isSameOrigin(
      'https://user:pass@example.com:443/api?key=1#top',
      'https://example.com/other?key=2#bottom',
    );
    expect(result).toBe(true);
  });
});
