/**
 * Removes falsy values from an array (false, 0, "", null, undefined, NaN).
 * Creates a new array containing only the truthy values from the input array.
 *
 * @param arr - The array with possible falsy values.
 * @returns A new array without any falsy values.
 *
 * @example
 * // Basic usage with mixed values
 * removeFalsyValues([0, 1, false, 2, "", 3, null, 4, undefined, NaN]); // Returns [1, 2, 3, 4]
 *
 * @example
 * // With objects and arrays (which are always truthy)
 * removeFalsyValues([{}, [], false, "hello"]); // Returns [{}, [], "hello"]
 *
 * @example
 * // With only falsy values
 * removeFalsyValues([false, 0, "", null, undefined, NaN]); // Returns []
 *
 * @example
 * // Empty array
 * removeFalsyValues([]); // Returns []
 *
 * @note This function uses JavaScript's boolean coercion rules to determine truthiness.
 * In JavaScript, the following values are considered falsy: false, 0, "" (empty string),
 * null, undefined, and NaN. All other values are truthy, including empty objects and arrays.
 *
 * @complexity O(n) where n is the length of the input array
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
