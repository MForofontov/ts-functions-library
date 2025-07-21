/**
 * Creates an object from an array of objects, using the specified property value
 * of each object as the key and the entire object as the value.
 *
 * @param array - The array of objects to convert into an object.
 * @param key - The property name to use for generating keys.
 * @returns An object where keys are property values from the objects and values are the complete objects.
 * @throws When input is not an array.
 *
 * @example
 * // Create an object indexed by id
 * const users = [
 *   { id: 'a1', name: 'Alice', age: 30 },
 *   { id: 'b2', name: 'Bob', age: 25 }
 * ];
 * keyBy(users, 'id');
 * // => {
 * //   'a1': { id: 'a1', name: 'Alice', age: 30 },
 * //   'b2': { id: 'b2', name: 'Bob', age: 25 }
 * // }
 *
 * @note Property values are converted to strings when used as keys.
 * @note If multiple objects have the same key value, later objects will overwrite earlier ones.
 */
export function keyBy<T extends Record<string, unknown>>(
  array: T[],
  key: keyof T,
): Record<string, T> {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  return array.reduce<Record<string, T>>((acc, item) => {
    if (Object.prototype.hasOwnProperty.call(item, key)) {
      acc[String(item[key])] = item;
    }
    return acc;
  }, {});
}
