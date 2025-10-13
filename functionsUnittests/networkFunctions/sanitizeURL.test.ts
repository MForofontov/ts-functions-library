import { sanitizeURL } from '../../networkFunctions/sanitizeURL';

/**
 * Unit tests for the sanitizeURL function.
 */
describe('sanitizeURL', () => {
  it('1. should allow valid HTTP URL', () => {
    const result = sanitizeURL('http://example.com');
    expect(result).toBe('http://example.com/');
  });

  it('2. should allow valid HTTPS URL', () => {
    const result = sanitizeURL('https://example.com/path');
    expect(result).toBe('https://example.com/path');
  });

  it('3. should block javascript: protocol', () => {
    expect(() => sanitizeURL('javascript:alert("XSS")')).toThrow(Error);
    expect(() => sanitizeURL('javascript:alert("XSS")')).toThrow(
      'URL contains dangerous protocol',
    );
  });

  it('4. should block data: protocol', () => {
    expect(() =>
      sanitizeURL('data:text/html,<script>alert("XSS")</script>'),
    ).toThrow(Error);
    expect(() =>
      sanitizeURL('data:text/html,<script>alert("XSS")</script>'),
    ).toThrow('URL contains dangerous protocol');
  });

  it('5. should block vbscript: protocol', () => {
    expect(() => sanitizeURL('vbscript:msgbox("XSS")')).toThrow(Error);
    expect(() => sanitizeURL('vbscript:msgbox("XSS")')).toThrow(
      'URL contains dangerous protocol',
    );
  });

  it('6. should block file: protocol by default', () => {
    expect(() => sanitizeURL('file:///etc/passwd')).toThrow(Error);
    expect(() => sanitizeURL('file:///etc/passwd')).toThrow(
      'URL contains dangerous protocol',
    );
  });

  it('7. should allow file: protocol when in whitelist', () => {
    const result = sanitizeURL('file:///path/to/file.txt', ['file']);
    expect(result).toBe('file:///path/to/file.txt');
  });

  it('8. should allow custom protocol in whitelist', () => {
    const result = sanitizeURL('custom://example.com', ['custom']);
    expect(result).toBe('custom://example.com');
  });

  it('9. should block protocol not in whitelist', () => {
    expect(() => sanitizeURL('ftp://example.com', ['http', 'https'])).toThrow(
      Error,
    );
    expect(() => sanitizeURL('ftp://example.com', ['http', 'https'])).toThrow(
      'URL protocol not in whitelist',
    );
  });

  it('10. should throw TypeError for non-string URL', () => {
    const url = 123 as unknown as string;
    expect(() => sanitizeURL(url)).toThrow(TypeError);
    expect(() => sanitizeURL(url)).toThrow('url must be a string');
  });

  it('11. should throw TypeError for non-array whitelist', () => {
    const whitelist = 'http' as unknown as string[];
    expect(() => sanitizeURL('http://example.com', whitelist)).toThrow(
      TypeError,
    );
    expect(() => sanitizeURL('http://example.com', whitelist)).toThrow(
      'allowedProtocols must be an array',
    );
  });

  it('12. should throw Error for invalid URL', () => {
    expect(() => sanitizeURL('not a url')).toThrow('Invalid URL');
  });

  it('13. should handle URL with query parameters', () => {
    const result = sanitizeURL('https://example.com/path?query=value');
    expect(result).toBe('https://example.com/path?query=value');
  });

  it('14. should handle URL with hash', () => {
    const result = sanitizeURL('https://example.com/path#section');
    expect(result).toBe('https://example.com/path#section');
  });

  it('15. should handle URL with port', () => {
    const result = sanitizeURL('https://example.com:8080/path');
    expect(result).toBe('https://example.com:8080/path');
  });

  it('16. should block FTP when not using custom whitelist', () => {
    expect(() => sanitizeURL('ftp://ftp.example.com/file.txt')).toThrow(Error);
    expect(() => sanitizeURL('ftp://ftp.example.com/file.txt')).toThrow(
      'URL protocol not in whitelist',
    );
  });

  it('17. should handle multiple allowed protocols', () => {
    const result = sanitizeURL('ftp://example.com', ['http', 'https', 'ftp']);
    expect(result).toBe('ftp://example.com/');
  });

  it('18. should be case-insensitive for dangerous protocols', () => {
    expect(() => sanitizeURL('JavaScript:alert("XSS")')).toThrow(Error);
    expect(() => sanitizeURL('JAVASCRIPT:alert("XSS")')).toThrow(Error);
  });

  it('19. should handle IPv4 URLs', () => {
    const result = sanitizeURL('http://192.168.1.1/admin');
    expect(result).toBe('http://192.168.1.1/admin');
  });

  it('20. should handle IPv6 URLs', () => {
    const result = sanitizeURL('http://[2001:db8::1]/api');
    expect(result).toBe('http://[2001:db8::1]/api');
  });
});
