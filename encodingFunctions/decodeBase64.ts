import { Buffer } from 'buffer';

/**
 * Decodes a base64 encoded string.
 *
 * Note: This function relies on Node's `Buffer` API. In browser
 * environments consider using `atob` for base64 decoding instead.
 *
 * @param str - The base64 encoded string to decode.
 * @returns The decoded string.
 *
 * @example
 * decodeBase64("aGVsbG8gd29ybGQ="); // "hello world"
 */
export function decodeBase64(str: string): string {
  return Buffer.from(str, 'base64').toString('utf-8');
}
