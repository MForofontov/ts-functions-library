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
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
