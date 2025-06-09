/**
 * Creates a new object containing only the specified keys from the source object.
 *
 * @param obj - The source object to pick properties from.
 * @param keysToPick - Array of keys to include in the result.
 * @returns A new object with only the specified keys.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Pick specific properties
 * const user = { id: 1, name: 'John', email: 'john@example.com', role: 'admin' };
 * const publicUser = pickKeys(user, ['id', 'name']);
 * // => { id: 1, name: 'John' }
 *
 * @note Creates a new object and doesn't modify the original.
 * @note If a key in keysToPick doesn't exist in the object, it's simply ignored.
 */
export function pickKeys<T extends Record<string, any>>(
  obj: T,
  keysToPick: (keyof T)[],
): Partial<T> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keysToPick.includes(key as keyof T)),
  ) as Partial<T>;
}
