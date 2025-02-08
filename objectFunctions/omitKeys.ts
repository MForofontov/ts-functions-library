/**
 * Omits specified keys from an object.
 * 
 * This function creates a new object by omitting the specified keys from the input object.
 * 
 * @param {T} obj - The object to omit keys from.
 * @param {Array<keyof T>} keysToOmit - The keys to omit from the object.
 * @returns {Partial<T>} - A new object with the specified keys omitted.
 * @throws {TypeError} - If the input is not a non-null object.
 * 
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = omitKeys(obj, ['b', 'c']);
 * // result: { a: 1 }
 */
export function omitKeys<T extends Record<string, any>>(obj: T, keysToOmit: (keyof T)[]): Partial<T> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !keysToOmit.includes(key as keyof T))) as Partial<T>;
}