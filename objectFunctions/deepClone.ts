/**
 * Creates a deep clone of an object or array using `structuredClone` when
 * available.
 *
 * @param obj - The object to clone.
 * @returns A deep copy of the input object.
 * @throws When input is not a non-null object.
 *
 * @example
 * const original = { name: 'John', address: { city: 'NY' } };
 * const copy = deepClone(original);
 * copy.address.city = 'LA'; // Doesn't affect the original
 *
 * @note Falls back to JSON serialization if `structuredClone` is not
 * available. The fallback has limitations: it doesn't preserve functions,
 * undefined values, Date objects, RegExp, Maps, Sets, or circular
 * references.
*/
export function deepClone<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  if (typeof globalThis.structuredClone === 'function') {
    return globalThis.structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}
