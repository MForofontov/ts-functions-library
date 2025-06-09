/**
 * Creates a new object with all properties from the source except those with empty values.
 * Empty values are defined as null, undefined, or empty strings.
 *
 * @param obj - The source object to filter.
 * @returns A new object containing only properties with non-empty values.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Basic usage
 * const obj = { a: 1, b: null, c: '', d: undefined, e: 'value' };
 * removeEmptyValues(obj);
 * // => { a: 1, e: 'value' }
 *
 * @note Creates a new object and doesn't modify the original.
 * @note Zero, false, and empty arrays/objects are NOT considered empty values.
 * @note Only performs shallow filtering - doesn't remove empty values in nested objects.
 */
export function removeEmptyValues(
  obj: Record<string, any>,
): Partial<Record<string, any>> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== null && value !== undefined && value !== '',
    ),
  );
}
