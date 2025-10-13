import { isSubdomain } from '../../networkFunctions/isSubdomain';

/**
 * Unit tests for the isSubdomain function.
 */
describe('isSubdomain', () => {
  it('1. should return true for subdomain', () => {
    const result = isSubdomain(
      'https://api.example.com',
      'https://example.com',
    );
    expect(result).toBe(true);
  });

  it('2. should return true for nested subdomain', () => {
    const result = isSubdomain(
      'https://api.v2.example.com',
      'https://example.com',
    );
    expect(result).toBe(true);
  });

  it('3. should return false for same domain', () => {
    const result = isSubdomain('https://example.com', 'https://example.com');
    expect(result).toBe(false);
  });

  it('4. should return false for different domains', () => {
    const result = isSubdomain('https://other.com', 'https://example.com');
    expect(result).toBe(false);
  });

  it('5. should return true for www subdomain', () => {
    const result = isSubdomain(
      'https://www.example.com',
      'https://example.com',
    );
    expect(result).toBe(true);
  });

  it('6. should be case-insensitive', () => {
    const result = isSubdomain(
      'https://API.EXAMPLE.COM',
      'https://example.com',
    );
    expect(result).toBe(true);
  });

  it('7. should handle domains with paths', () => {
    const result = isSubdomain(
      'https://api.example.com/path',
      'https://example.com/other',
    );
    expect(result).toBe(true);
  });

  it('8. should handle domains with ports', () => {
    const result = isSubdomain(
      'https://api.example.com:8080',
      'https://example.com:8080',
    );
    expect(result).toBe(true);
  });

  it('9. should return false when parent has subdomain', () => {
    const result = isSubdomain(
      'https://api.example.com',
      'https://www.example.com',
    );
    expect(result).toBe(false);
  });

  it('10. should throw TypeError for non-string subdomainUrl', () => {
    const url = 123 as unknown as string;
    expect(() => isSubdomain(url, 'https://example.com')).toThrow(TypeError);
    expect(() => isSubdomain(url, 'https://example.com')).toThrow(
      'subdomainUrl must be a string',
    );
  });

  it('11. should throw TypeError for non-string parentUrl', () => {
    const url = 123 as unknown as string;
    expect(() => isSubdomain('https://api.example.com', url)).toThrow(
      TypeError,
    );
    expect(() => isSubdomain('https://api.example.com', url)).toThrow(
      'parentUrl must be a string',
    );
  });

  it('12. should throw Error for invalid subdomainUrl', () => {
    expect(() => isSubdomain('not a url', 'https://example.com')).toThrow(
      'Invalid URL',
    );
  });

  it('13. should throw Error for invalid parentUrl', () => {
    expect(() => isSubdomain('https://api.example.com', 'not a url')).toThrow(
      'Invalid URL',
    );
  });

  it('14. should handle multi-part TLDs', () => {
    const result = isSubdomain(
      'https://api.example.co.uk',
      'https://example.co.uk',
    );
    expect(result).toBe(true);
  });

  it('15. should return false for parent being subdomain of first', () => {
    const result = isSubdomain(
      'https://example.com',
      'https://api.example.com',
    );
    expect(result).toBe(false);
  });

  it('16. should handle deep nesting', () => {
    const result = isSubdomain(
      'https://a.b.c.d.example.com',
      'https://example.com',
    );
    expect(result).toBe(true);
  });

  it('17. should return false for similar but different domains', () => {
    const result = isSubdomain('https://example.com', 'https://myexample.com');
    expect(result).toBe(false);
  });

  it('18. should handle IPv4 addresses', () => {
    const result = isSubdomain('http://192.168.1.1', 'http://192.168.1.1');
    expect(result).toBe(false);
  });

  it('19. should handle query parameters and hashes', () => {
    const result = isSubdomain(
      'https://api.example.com?key=value#section',
      'https://example.com',
    );
    expect(result).toBe(true);
  });

  it('20. should return false for partial domain match', () => {
    const result = isSubdomain('https://notexample.com', 'https://example.com');
    expect(result).toBe(false);
  });
});
