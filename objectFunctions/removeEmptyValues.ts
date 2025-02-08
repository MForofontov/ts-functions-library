/**
 * Removes empty values from an object.
 * 
 * This function creates a new object by removing properties with empty values (null, undefined, empty string) from the input object.
 * 
 * @param {Record<string, any>} obj - The object to remove empty values from.
 * @returns {Partial<Record<string, any>>} - A new object with empty values removed.
 * @throws {TypeError} - If the input is not a non-null object.
 * 
 * @example
 * const obj = { a: 1, b: null, c: '', d: undefined, e: 'value' };
 * const result = removeEmptyValues(obj);
 * // result: { a: 1, e: 'value' }
 */
export function removeEmptyValues(obj: Record<string, any>): Partial<Record<string, any>> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== null && value !== undefined && value !== ''));
}