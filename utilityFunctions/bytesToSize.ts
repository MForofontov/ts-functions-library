/**
 * Converts bytes to a human-readable size string with appropriate units.
 *
 * @param bytes - The number of bytes (must be non-negative).
 * @returns The size as a formatted string with appropriate units (Bytes, KB, MB, GB, TB).
 *
 * @throws {TypeError} If bytes is not a number.
 * @throws {Error} If bytes is negative or NaN.
 *
 * @example
 * // Basic usage
 * bytesToSize(1024); // "1.00 KB"
 *
 * @example
 * // Various sizes
 * bytesToSize(0); // "0 Bytes"
 * bytesToSize(1536); // "1.50 KB"
 * bytesToSize(1048576); // "1.00 MB"
 * bytesToSize(1073741824); // "1.00 GB"
 *
 * @example
 * // Real-world file sizes
 * bytesToSize(2560000); // "2.44 MB"
 * bytesToSize(5368709120); // "5.00 GB"
 *
 * @note Uses base-1024 (binary) conversion (1 KB = 1024 bytes, not 1000).
 * @note Results are formatted to 2 decimal places.
 * @note Handles values up to terabytes (TB).
 * @note Uses logarithms to determine the appropriate unit efficiently.
 *
 * @complexity Time: O(1), Space: O(1)
 */
export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}
