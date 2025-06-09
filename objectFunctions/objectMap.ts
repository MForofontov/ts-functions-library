/**
 * Creates a new object by transforming each property value using the provided function.
 * Preserves all original keys while applying the transformation function to each value.
 *
 * @param obj - The source object whose values will be transformed.
 * @param fn - The function to apply to each value, receives value and key as arguments.
 * @returns A new object with the same keys but transformed values.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Double all numeric values
 * const original = { a: 1, b: 2, c: 3 };
 * const doubled = objectMap(original, value => value * 2);
 * // => { a: 2, b: 4, c: 6 }
 *
 * @note Creates a new object and doesn't modify the original.
 * @note Similar to Array.prototype.map() but for object values.
 */
export function objectMap<T, U>(
  obj: Record<string, T>,
  fn: (value: T, key: string) => U,
): Record<string, U> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }

  return Object.keys(obj).reduce(
    (acc, key) => {
      acc[key] = fn(obj[key], key);
      return acc;
    },
    {} as Record<string, U>,
  );
}
