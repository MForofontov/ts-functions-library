import { getURLPath } from '../../networkFunctions/getURLPath';

/**
 * Unit tests for the getURLPath function.
 */
describe('getURLPath', () => {
  it('1. should extract path from basic URL', () => {
    const result = getURLPath('https://example.com/api/users');
    expect(result).toBe('/api/users');
  });

  it('2. should extract path with query string', () => {
    const result = getURLPath('https://example.com/api/users?id=1');
    expect(result).toBe('/api/users');
  });

  it('3. should extract path with hash', () => {
    const result = getURLPath('https://example.com/api/users#section');
    expect(result).toBe('/api/users');
  });

  it('4. should extract path with query and hash', () => {
    const result = getURLPath('https://example.com/api/users?id=1#section');
    expect(result).toBe('/api/users');
  });

  it('5. should return / for root URL', () => {
    const result = getURLPath('https://example.com');
    expect(result).toBe('/');
  });

  it('6. should return / for root URL with query', () => {
    const result = getURLPath('https://example.com?query=value');
    expect(result).toBe('/');
  });

  it('7. should handle nested paths', () => {
    const result = getURLPath('https://example.com/api/v2/users/123/profile');
    expect(result).toBe('/api/v2/users/123/profile');
  });

  it('8. should throw TypeError for non-string URL', () => {
    const url = 123 as unknown as string;
    expect(() => getURLPath(url)).toThrow(TypeError);
    expect(() => getURLPath(url)).toThrow('url must be a string');
  });

  it('9. should throw Error for invalid URL', () => {
    expect(() => getURLPath('not a url')).toThrow('Invalid URL');
  });

  it('10. should work with URL containing port', () => {
    const result = getURLPath('http://localhost:8080/api/test');
    expect(result).toBe('/api/test');
  });

  it('11. should handle path with trailing slash', () => {
    const result = getURLPath('https://example.com/api/users/');
    expect(result).toBe('/api/users/');
  });

  it('12. should handle path with encoded characters', () => {
    const result = getURLPath('https://example.com/search/hello%20world');
    expect(result).toBe('/search/hello%20world');
  });

  it('13. should work with IPv4 URL', () => {
    const result = getURLPath('http://192.168.1.1/admin/dashboard');
    expect(result).toBe('/admin/dashboard');
  });

  it('14. should work with IPv6 URL', () => {
    const result = getURLPath('http://[2001:db8::1]/api/endpoint');
    expect(result).toBe('/api/endpoint');
  });

  it('15. should handle file protocol', () => {
    const result = getURLPath('file:///path/to/file.txt');
    expect(result).toBe('/path/to/file.txt');
  });

  it('16. should handle FTP URL', () => {
    const result = getURLPath('ftp://ftp.example.com/files/document.pdf');
    expect(result).toBe('/files/document.pdf');
  });

  it('17. should preserve path case sensitivity', () => {
    const result = getURLPath('https://example.com/API/Users');
    expect(result).toBe('/API/Users');
  });

  it('18. should handle path with dots', () => {
    const result = getURLPath('https://example.com/api/v1.0/users');
    expect(result).toBe('/api/v1.0/users');
  });

  it('19. should handle path with special characters', () => {
    const result = getURLPath('https://example.com/path-with_chars/file.name');
    expect(result).toBe('/path-with_chars/file.name');
  });

  it('20. should handle complex URL', () => {
    const result = getURLPath(
      'https://user:pass@example.com:443/api/v2/users?filter=active#top',
    );
    expect(result).toBe('/api/v2/users');
  });
});
