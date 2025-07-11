/**
 * Repeats a string until it reaches a specified length.
 *
 * @param str - The string to repeat.
 * @param length - The desired length of the output string.
 * @returns The repeated string truncated to the desired length.
 * @throws Will throw an error if the length is not a number or is negative.
 *
 * @example
 * repeatUntilLength("abc", 10); // "abcabcabca"
 *
 */
export function repeatUntilLength(str: string, length: number): string {
  if (isNaN(length)) {
    throw new Error('Length must be a number');
  }
  if (length < 0) {
    throw new Error('Length must be non-negative');
  }
  if (str.length === 0) {
    return '';
  }
  return str.repeat(Math.ceil(length / str.length)).substring(0, length);
}
