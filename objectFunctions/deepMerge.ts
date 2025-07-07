/**
 * Recursively merges objects, combining their properties and nested structures.
 *
 * @param target - The base object to merge into.
 * @param source - The object whose properties will be merged into the target.
 * @returns A new object containing the merged properties from both inputs.
 * @throws When either input is not a non-null object.
 *
 * @example
 * // Merging nested objects
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { b: { d: 3 }, e: 4 };
 * deepMerge(obj1, obj2);
 * // => { a: 1, b: { c: 2, d: 3 }, e: 4 }
 *
 * @note Creates a new object and doesn't modify the inputs.
 * @note Arrays are concatenated rather than recursively merged.
 * @note For conflicting primitive values, the source value overwrites the target value.
 */
export function deepMerge<T extends object, U extends object>(
  target: T,
  source: U,
): T & U {
  const isObject = (obj: any): obj is object => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    throw new TypeError('Both target and source must be non-null objects');
  }

  const merge = (t: any, s: any): any => {
    Reflect.ownKeys(s).forEach((k) => {
      const key = k as any;
      const targetValue = t[key];
      const sourceValue = s[key];
      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        t[key] = targetValue.concat(sourceValue);
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        t[key] = merge({ ...targetValue }, sourceValue);
      } else {
        t[key] = sourceValue;
      }
    });
    return t;
  };

  return merge({ ...target }, source) as T & U;
}
