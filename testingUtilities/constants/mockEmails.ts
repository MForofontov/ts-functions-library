/**
 * Common test email addresses for validation testing.
 */
export const MOCK_EMAILS = {
  valid: [
    'test@example.com',
    'user.name@example.com',
    'user+tag@example.co.uk',
    'first.last@subdomain.example.com',
  ],
  invalid: [
    'invalid',
    '@example.com',
    'user@',
    'user @example.com',
    'user@example',
  ],
};
