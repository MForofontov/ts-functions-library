/**
 * Common test URLs for validation testing.
 */
export const MOCK_URLS = {
  valid: [
    'https://example.com',
    'http://subdomain.example.com:8080/path?query=value',
    'https://example.com/path/to/resource',
    'http://localhost:3000',
  ],
  invalid: ['not-a-url', 'htp://example.com', '//example.com', 'example.com'],
};
