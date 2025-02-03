/**
 * Checks if an object is empty.
 * 
 * @param {Record<string, any>} obj - The object to check.
 * @returns {boolean} - True if the object is empty, false otherwise.
 * @throws {TypeError} - If the input is not an object.
 */
export function isObjectEmpty(obj: Record<string, any>): boolean {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.keys(obj).length === 0;
}