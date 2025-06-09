/**
 * Creates a new object excluding the specified keys from the input object.
 *
 * @param obj - The source object to exclude keys from.
 * @param keysToOmit - Array of keys to exclude from the result.
 * @returns A new object with the specified keys removed.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Remove specific keys
 * const user = { id: 1, name: 'John', password: 'secret', role: 'admin' };
 * const safeUser = omitKeys(user, ['password', 'role']);
 * // => { id: 1, name: 'John' }
 *
 * @note Creates a new object and doesn't modify the original.
 * @note If a key in keysToOmit doesn't exist in the object, it's simply ignored.
 */
export function omitKeys<T extends Record<string, any>>(
  obj: T,
  keysToOmit: (keyof T)[],
): Partial<T> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keysToOmit.includes(key as keyof T)),
  ) as Partial<T>;
}
