/**
 * Checks if an object has a specific key.
 * 
 * This function returns true if the object has the specified key as its own property.
 * 
 * @param {Record<string, any>} obj - The object to check.
 * @param {string} key - The key to check for.
 * @returns {boolean} - True if the object has the key, false otherwise.
 * @throws {TypeError} - If the input object is not a non-null object.
 * 
 * @example
 * const obj = { a: 1, b: 2 };
 * const result = hasKey(obj, 'a');
 * // result: true
 */
export function hasKey(obj: Record<string, any>, key: string): boolean {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.prototype.hasOwnProperty.call(obj, key);
}