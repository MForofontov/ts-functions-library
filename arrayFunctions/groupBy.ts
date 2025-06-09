/**
 * Groups an array of objects by a specific property.
 *
 * @param arr - The array of objects to group.
 * @param key - The property to group by.
 * @returns An object where each key is a value of the property, and the value is an array of items with that property.
 */
export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce(
    (grouped, item) => {
      const groupKey = String(item[key]);
      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }
      grouped[groupKey].push(item);
      return grouped;
    },
    {} as Record<string, T[]>,
  );
}

// Example usage:
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 30 }
// ];
// groupBy(people, 'age');
// Output: { "25": [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }], "30": [{ name: "Charlie", age: 30 }] }
