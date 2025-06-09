/**
 * Rotates an array to the left by a given number of positions.
 *
 * @param arr - The array to rotate.
 * @param positions - The number of positions to rotate the array.
 * @returns The rotated array.
 */
export function rotateArrayLeft<T>(arr: T[], positions: number): T[] {
  const len = arr.length;
  if (len === 0) return arr;

  // Normalize positions to be within the array length
  positions = ((positions % len) + len) % len;

  return arr.slice(positions).concat(arr.slice(0, positions));
}
