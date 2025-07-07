/**
 * Creates a deep clone of an object while customizing how individual values are cloned.
 *
 * @param obj - The object to clone.
 * @param cloneFn - A function that transforms each non-object value during cloning.
 * @returns A deep copy with values transformed by the custom function.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Double all number values in the object
 * const original = { name: 'John', age: 30, scores: [80, 90] };
 * const doubled = deepCloneWith(original, value =>
 *   typeof value === 'number' ? value * 2 : value
 * );
 * // => { name: 'John', age: 60, scores: [160, 180] }
 */
export function deepCloneWith<T>(obj: T, cloneFn: (value: any) => any): T {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }

  const clone = (value: any): any => {
    if (Array.isArray(value)) {
      return value.map(clone);
    }
    if (value && typeof value === 'object') {
      return Reflect.ownKeys(value).reduce((acc: any, k) => {
        acc[k as any] = clone((value as any)[k]);
        return acc;
      }, {} as any);
    }
    return cloneFn(value);
  };

  return clone(obj);
}
