/**
 * Picks specified keys from an object.
 * 
 * This function creates a new object by picking the specified keys from the input object.
 * 
 * @param {T} obj - The object to pick keys from.
 * @param {Array<keyof T>} keysToPick - The keys to pick from the object.
 * @returns {Partial<T>} - A new object with the specified keys picked.
 * @throws {TypeError} - If the input is not a non-null object.
 * 
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = pickKeys(obj, ['b', 'c']);
 * // result: { b: 2, c: 3 }
 */
export function pickKeys<T extends Record<string, any>>(obj: T, keysToPick: (keyof T)[]): Partial<T> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.fromEntries(Object.entries(obj).filter(([key]) => keysToPick.includes(key as keyof T))) as Partial<T>;
}