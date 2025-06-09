/**
 * Creates a new object by swapping the keys and values of the input object.
 * All values are converted to strings when used as keys in the result.
 *
 * @param obj - The object whose keys and values will be swapped.
 * @returns A new object with keys and values swapped.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Basic usage
 * flipObject({ a: 1, b: 2 });
 * // => { '1': 'a', '2': 'b' }
 *
 * @note If the original object has duplicate values, the last key with that value will be used.
 * @note Complex values (objects, arrays) are converted to strings using toString().
 */
export function flipObject<T extends Record<string, any>>(
  obj: T,
): Record<string, string> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  return Object.keys(obj).reduce((acc: Record<string, any>, key: string) => {
    acc[String(obj[key])] = key;
    return acc;
  }, {});
}
