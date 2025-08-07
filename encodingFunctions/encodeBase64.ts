import { Buffer } from 'buffer';

/**
 * Encodes a string as a URL-safe base64 string.
 *
 * Note: This function relies on Node's `Buffer` API. In browser
 * environments consider using `btoa` for base64 encoding instead.
 *
 * @param str - The string to encode.
 * @returns The base64 encoded string.
 *
 * @example
 * encodeBase64("hello world"); // "aGVsbG8gd29ybGQ"
 */
export function encodeBase64(str: string): string {
  const hasNonLatin1 = [...str].some((ch) => ch.charCodeAt(0) > 0xff);
  const buffer = hasNonLatin1
    ? Buffer.from(str, 'utf8')
    : Buffer.from([...str].map((c) => c.charCodeAt(0)));

  return buffer
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
