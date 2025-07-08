/**
 * Converts an RGB object to a hexadecimal color code.
 *
 * @param rgb - The object containing red, green, and blue values.
 * @returns The hex color string.
 *
 * @example
 * rgbToHex({ r: 255, g: 87, b: 51 }); // "#ff5733"
 *
 */
export function rgbToHex(rgb: { r: number; g: number; b: number }): string {
  const toHex = (num: number) => num.toString(16).padStart(2, '0');
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

