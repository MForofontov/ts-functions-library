/**
 * Checks if an object is empty.
 * 
 * This function returns true if the object has no own enumerable properties.
 * 
 * @param {Record<string, any>} obj - The object to check.
 * @returns {boolean} - True if the object is empty, false otherwise.
 * @throws {TypeError} - If the input is not a non-null object.
 * 
 * @example
 * const obj = {};
 * const result = isEmptyObject(obj);
 * // result: true
 */
export function isEmptyObject(obj: Record<string, any>): boolean {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.keys(obj).length === 0;
}