/**
 * Converts an RGB object to a hexadecimal color code.
 *
 * @param rgb - The object containing red, green, and blue values.
 * @returns The hex color string.
 *
 * @example
 * // Basic usage
 * rgbToHex({ r: 255, g: 87, b: 51 }); // '#ff5733'
 *
 * @note Values are clamped and converted to two-digit hexadecimal strings.
 *
 * @complexity O(1)
 */
export function rgbToHex(rgb: { r: number; g: number; b: number }): string {
  const toHex = (num: number) => num.toString(16).padStart(2, '0');
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}
