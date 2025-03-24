/**
 * Sorts the keys of an object in ascending order and returns a new object with the sorted keys.
 *
 * @template T - The type of the input object.
 * @param {T} obj - The object whose keys are to be sorted.
 * @returns {T} - A new object with the keys sorted in ascending order.
 * @throws {TypeError} - If the input is not an object or is null/undefined.
 * 
 * @example
 * const obj = { c: 3, a: 1, b: 2 };
 * const result = sortObjectKeys(obj);
 * // result: { a: 1, b: 2, c: 3 }
 */
export function sortObjectKeys<T extends Record<string, any>>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.fromEntries(
        Object.entries(obj).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    ) as T;
}