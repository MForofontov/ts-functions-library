/**
 * Converts bytes to a human-readable size string.
 *
 * @param bytes - The number of bytes.
 * @returns The size as a string with appropriate units.
 *
 * @example
 * // Basic usage
 * bytesToSize(1024); // "1.00 KB"
 *
 * @example
 * // Larger values
 * bytesToSize(1048576); // "1.00 MB"
 *
 * @note Uses logarithms to determine the appropriate unit.
 * The function handles values up to terabytes by default.
 *
 * @complexity O(1)
 */
export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

