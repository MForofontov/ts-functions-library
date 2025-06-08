/**
 * Creates a new object with the same properties as the input, but with keys sorted alphabetically.
 * 
 * @param obj - The object whose keys should be sorted.
 * @returns A new object with identical properties but keys in alphabetical order.
 * @throws When input is not a non-null object.
 * 
 * @example
 * // Basic usage
 * sortObjectKeys({ c: 3, a: 1, b: 2 });
 * // => { a: 1, b: 2, c: 3 }
 * 
 * @example
 * // With mixed key types
 * sortObjectKeys({ 10: 'ten', 2: 'two', a: 'alpha' });
 * // => { '10': 'ten', '2': 'two', a: 'alpha' }
 * 
 * @note Creates a new object and doesn't modify the original.
 * @note Uses string comparison (localeCompare) for sorting, which means numbers as keys
 *       will be sorted as strings, not by numeric value.
 */
export function sortObjectKeys<T extends Record<string, any>>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.fromEntries(
        Object.entries(obj).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    ) as T;
}
