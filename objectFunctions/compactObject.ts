/**
 * Creates a new object with all properties from the source except those with null or undefined values.
 *
 * @param obj - The source object to process.
 * @returns A new object containing only properties with non-null and non-undefined values.
 * @throws When input is not a non-null object.
 *
 * @example
 * const result = compactObject({ a: 1, b: null, c: undefined, d: 0, e: '' });
 * // => { a: 1, d: 0, e: '' }
 */
export function compactObject<T extends Record<string, any>>(obj: T): Partial<T> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }

  const compact = (value: any): any => {
    if (Array.isArray(value)) {
      return value.map((v) => (typeof v === 'object' && v !== null ? compact(v) : v));
    }
    if (value && typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value)
          .map(([k, v]) => [k, compact(v)])
          .filter(([_, v]) => v != null),
      );
    }
    return value;
  };

  return compact(obj);
}
