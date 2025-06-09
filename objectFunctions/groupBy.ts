/**
 * Groups the elements of an array into separate arrays based on the values of a specified property.
 *
 * @param array - The array of objects to group.
 * @param key - The property name to group by.
 * @returns An object where keys are unique property values and values are arrays of matching elements.
 * @throws When the input is not an array.
 *
 * @example
 * // Group people by age
 * const people = [
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 30 },
 *   { name: 'Carol', age: 25 }
 * ];
 * groupBy(people, 'age');
 * // => {
 * //   '25': [{ name: 'Alice', age: 25 }, { name: 'Carol', age: 25 }],
 * //   '30': [{ name: 'Bob', age: 30 }]
 * // }
 *
 * groupBy(items, 'category');
 * // => {
 * //   'true': [{ id: 1, category: true }],
 * //   'false': [{ id: 2, category: false }]
 * // }
 *
 * @note Property values are converted to strings when used as keys in the result object.
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }

  return array.reduce(
    (acc, item) => {
      const group = String(item[key]);
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );
}
