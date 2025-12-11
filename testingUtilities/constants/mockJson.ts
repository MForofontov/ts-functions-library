/**
 * Common test JSON strings for validation testing.
 */
export const MOCK_JSON = {
  valid: [
    '{"key": "value"}',
    '[1, 2, 3]',
    '{"nested": {"data": true}}',
    'null',
    '42',
    '"string"',
  ],
  invalid: ['{key: value}', "{'key': 'value'}", '{', 'undefined', 'NaN'],
};
