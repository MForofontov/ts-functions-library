/**
 * Checks if an object has a specific key.
 * 
 * @param {T} obj - The object to check.
 * @param {keyof T} key - The key to check for.
 * @returns {boolean} - True if the object has the key, false otherwise.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function hasKey<T extends Record<string, any>>(obj: T, key: keyof T): boolean {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.prototype.hasOwnProperty.call(obj, key);
}