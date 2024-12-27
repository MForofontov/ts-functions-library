import { Buffer } from 'buffer';

/**
 * Encodes a string as a URL-safe base64 string.
 * 
 * @param str - The string to encode.
 * @returns The base64 encoded string.
 */
export function encodeBase64(str: string): string {
    return Buffer.from(str).toString('base64');
}

// Example usage:
// encodeBase64("hello world"); // "aGVsbG8gd29ybGQ="