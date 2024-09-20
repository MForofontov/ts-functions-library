import { Buffer } from 'buffer';

/**
 * Decodes a base64 encoded string.
 * 
 * @param str - The base64 encoded string to decode.
 * @returns The decoded string.
 */
export function decodeBase64(str: string): string {
    return Buffer.from(str, 'base64').toString('utf-8');
}

// Example usage:
// decodeBase64("aGVsbG8gd29ybGQ="); // "hello world"