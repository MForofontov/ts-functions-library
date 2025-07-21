/**
 * Creates a new object with properties that satisfy the predicate function.
 *
 * @param obj - The source object to filter properties from.
 * @param predicate - Function that determines which properties to include.
 *                    Return true to keep a property, false to exclude it.
 * @returns A new object with only the properties where predicate returned true.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Keep only numeric values
 * const data = { a: 1, b: 'string', c: 3, d: false };
 * pickBy(data, value => typeof value === 'number');
 * // => { a: 1, c: 3 }
 *
 * @note Creates a new object and doesn't modify the original.
 * @note Similar to Array.prototype.filter() but for object properties.
 */
export function pickBy<T extends Record<string, unknown>>(
  obj: T,
  predicate: (value: unknown, key: string) => boolean,
): Partial<T> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }

  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => predicate(value, key)),
  ) as Partial<T>;
}
