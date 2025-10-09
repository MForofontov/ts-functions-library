import { isValidURL } from '../../networkFunctions/isValidURL';

/**
 * Unit tests for the isValidURL function.
 */
describe('isValidURL', () => {
  // Test case 1: Valid HTTPS URL
  it('1. should return true for valid HTTPS URL', () => {
    expect(isValidURL('https://example.com')).toBe(true);
  });

  // Test case 2: Valid HTTP URL
  it('2. should return true for valid HTTP URL', () => {
    expect(isValidURL('http://example.com')).toBe(true);
  });

  // Test case 3: Invalid URL format
  it('3. should return false for invalid URL format', () => {
    expect(isValidURL('not a url')).toBe(false);
  });

  // Test case 4: URL with port
  it('4. should return true for URL with port', () => {
    expect(isValidURL('http://localhost:8080')).toBe(true);
  });

  // Test case 5: URL with path and query
  it('5. should return true for URL with path and query', () => {
    expect(isValidURL('https://example.com/path?query=value')).toBe(true);
  });

  // Test case 6: FTP URL
  it('6. should return true for FTP URL', () => {
    expect(isValidURL('ftp://ftp.example.com/files')).toBe(true);
  });

  // Test case 7: Error case - non-string input
  it('7. should throw TypeError for non-string input', () => {
    const input = 12345 as unknown as string;
    expect(() => isValidURL(input)).toThrow(TypeError);
    expect(() => isValidURL(input)).toThrow('url must be a string');
  });

  // Test case 8: Allowed schemes - HTTP/HTTPS only (valid)
  it('8. should return true for HTTPS with allowed schemes', () => {
    expect(isValidURL('https://example.com', ['http', 'https'])).toBe(true);
  });

  // Test case 9: Allowed schemes - HTTP/HTTPS only (invalid)
  it('9. should return false for FTP with HTTP/HTTPS allowed schemes', () => {
    expect(isValidURL('ftp://example.com', ['http', 'https'])).toBe(false);
  });

  // Test case 10: Allowed schemes - empty array
  it('10. should return true for any valid URL with empty allowed schemes', () => {
    expect(isValidURL('ftp://example.com', [])).toBe(true);
  });

  // Test case 11: Error case - invalid allowedSchemes type
  it('11. should throw TypeError for non-array allowedSchemes', () => {
    const schemes = 'http' as unknown as string[];
    expect(() => isValidURL('https://example.com', schemes)).toThrow(TypeError);
  });

  // Test case 12: URL without protocol
  it('12. should return false for URL without protocol', () => {
    expect(isValidURL('example.com')).toBe(false);
  });

  // Test case 13: URL with IPv4
  it('13. should return true for URL with IPv4', () => {
    expect(isValidURL('http://192.168.1.1')).toBe(true);
  });

  // Test case 14: URL with IPv6
  it('14. should return true for URL with IPv6', () => {
    expect(isValidURL('http://[2001:db8::1]')).toBe(true);
  });

  // Test case 15: File protocol URL
  it('15. should return true for file protocol', () => {
    expect(isValidURL('file:///path/to/file.txt')).toBe(true);
  });

  // Test case 16: Mailto URL
  it('16. should return true for mailto URL', () => {
    expect(isValidURL('mailto:user@example.com')).toBe(true);
  });

  // Test case 17: Data URL
  it('17. should return true for data URL', () => {
    expect(isValidURL('data:text/plain;base64,SGVsbG8=')).toBe(true);
  });

  // Test case 18: WebSocket URL
  it('18. should return true for WebSocket URL', () => {
    expect(isValidURL('ws://example.com:8080/socket')).toBe(true);
  });

  // Test case 19: Secure WebSocket URL
  it('19. should return true for secure WebSocket URL', () => {
    expect(isValidURL('wss://example.com/socket')).toBe(true);
  });

  // Test case 20: Custom scheme with allowed schemes
  it('20. should enforce allowed schemes correctly', () => {
    expect(isValidURL('custom://example.com', ['custom'])).toBe(true);
    expect(isValidURL('custom://example.com', ['http'])).toBe(false);
  });
});
