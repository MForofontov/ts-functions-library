/**
 * Common test IP addresses for validation testing.
 */
export const MOCK_IP_ADDRESSES = {
  ipv4Valid: ['192.168.1.1', '10.0.0.1', '172.16.0.1', '8.8.8.8'],
  ipv4Invalid: ['256.1.1.1', '192.168.1', '192.168.1.1.1', 'not-an-ip'],
  ipv6Valid: [
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    '2001:db8:85a3::8a2e:370:7334',
    '::1',
    'fe80::1',
  ],
  ipv6Invalid: ['gggg::1', '2001:db8:85a3::8a2e:370g:7334', ':::1'],
};
