/**
 * Removes elements from an array based on a provided condition.
 *
 * @param arr - The array to filter.
 * @param predicate - The condition to filter by.
 * @returns A new array with the elements that do not match the condition removed.
 */
export function removeByCondition<T>(
  arr: T[],
  predicate: (value: T) => boolean,
): T[] {
  return arr.filter((value) => !predicate(value));
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5, 6];
// removeByCondition(numbers, num => num % 2 === 0); // [1, 3, 5]
