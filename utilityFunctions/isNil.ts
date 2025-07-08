/**
 * Checks if a value is null or undefined.
 *
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 *
 * @example
 * // Basic usage
 * isNil(null); // true
 * isNil(undefined); // true
 * isNil(0); // false
 *
 * @note Performs a strict equality check against `null` and `undefined`.
 *
 * @complexity O(1)
 */
export function isNil(value: any): boolean {
  return value === null || value === undefined;
}

