/**
 * Performs a shallow comparison between two objects to determine if they are equal.
 * 
 * @param {Record<string, any>} obj1 - The first object to compare.
 * @param {Record<string, any>} obj2 - The second object to compare.
 * @returns {boolean} - True if the objects are shallowly equal, false otherwise.
 * @throws {TypeError} - If either input is not an object or is null.
 */
export function shallowEqual(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        throw new TypeError('Both inputs must be non-null objects');
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    return keys1.every(key => obj1[key] === obj2[key]);
}
