/**
 * Counts the number of properties in an object.
 * 
 * @param {Record<string, any>} obj - The object to count properties of.
 * @returns {number} - The number of properties in the object.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function countProperties(obj: Record<string, any>): number {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.keys(obj).length;
}
