/**
 * Checks if a value is null or undefined.
 *
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 *
 * @example
 * isNil(null); // true
 * isNil(undefined); // true
 * isNil(0); // false
 *
 */
export function isNil(value: any): boolean {
  return value === null || value === undefined;
}

