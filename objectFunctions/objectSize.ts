/**
 * Calculates the number of own enumerable properties in an object.
 * 
 * @param {Record<string, any>} obj - The object whose size is to be calculated.
 * @returns {number} - The number of own enumerable properties in the object.
 * @throws {TypeError} - If the input is not an object.
 */
export function objectSize(obj: Record<string, any>): number {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.keys(obj).length;
}