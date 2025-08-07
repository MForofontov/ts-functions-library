import { Buffer } from 'buffer';

/**
 * Decodes a base64 encoded string.
 *
 * Note: This function relies on Node's `Buffer` API. In browser
 * environments consider using `atob` for base64 decoding instead.
 *
 * @param str - The base64 encoded string to decode.
 * @returns The decoded string.
 * @throws {Error} If the provided string is not valid base64.
 *
 * @example
 * decodeBase64("aGVsbG8gd29ybGQ="); // "hello world"
 */
export function decodeBase64(str: string): string {
  try {
    const normalized = str.replace(/-/g, '+').replace(/_/g, '/');
    const buffer = Buffer.from(normalized, 'base64');
    const decoded = buffer.toString('utf-8');
    const reEncoded = buffer.toString('base64').replace(/=+$/, '');
    const sanitizedInput = normalized.replace(/=+$/, '');

    if (reEncoded !== sanitizedInput) {
      throw new Error('Invalid base64 string');
    }

    return decoded;
  } catch {
    throw new Error('Invalid base64 string');
  }
}
