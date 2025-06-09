/**
 * Removes falsy values from an array (e.g., false, 0, "", null, undefined, NaN).
 *
 * @param arr - The array with possible falsy values.
 * @returns A new array without any falsy values.
 */
export function removeFalsyValues<T>(
  arr: any[],
): Exclude<T, false | 0 | '' | null | undefined | typeof NaN>[] {
  return arr.filter(
    (
      value,
    ): value is Exclude<T, false | 0 | '' | null | undefined | typeof NaN> => {
      return (
        value !== false &&
        value !== 0 &&
        value !== '' &&
        value !== null &&
        value !== undefined &&
        !Number.isNaN(value as any)
      );
    },
  );
}

// Example usage:
// const mixedArray = [0, 1, false, 2, "", 3, null, 4, undefined, NaN];
// removeFalsyValues(mixedArray); // [1, 2, 3, 4]
