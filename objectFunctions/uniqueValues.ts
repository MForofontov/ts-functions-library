/**
 * Extracts the unique values from an object.
 *
 * @template T - The type of the input object.
 * @param {T} obj - The object whose unique values are to be extracted.
 * @returns {any[]} - An array of unique values from the object.
 * @throws {TypeError} - If the input is not an object or is null/undefined.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 1, d: 3 };
 * const result = uniqueValues(obj);
 * // result: [1, 2, 3]
 */
export function uniqueValues<T extends Record<string, any>>(obj: T): any[] {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    return [...new Set(Object.values(obj))];
}