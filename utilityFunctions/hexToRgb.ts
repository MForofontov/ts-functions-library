/**
 * Converts a hexadecimal color code to an RGB object.
 *
 * @param hex - The hex color string.
 * @returns An object with red, green, and blue values or null for invalid input.
 *
 * @example
 * // Basic usage
 * hexToRgb('#ff5733'); // { r: 255, g: 87, b: 51 }
 *
 * @note Input strings can optionally start with '#'.
 * Returns `null` for malformed values.
 *
 * @complexity O(1)
 */
export function hexToRgb(
  hex: string,
): { r: number; g: number; b: number } | null {
  const hexValue = hex.replace(/^#/, '');
  if (hexValue.length !== 6) return null;

  const bigint = parseInt(hexValue, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}
