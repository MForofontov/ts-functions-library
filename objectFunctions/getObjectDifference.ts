/**
 * Returns the difference between two objects.
 * 
 * @param {T} obj1 - The first object to compare.
 * @param {T} obj2 - The second object to compare.
 * @returns {Partial<T>} - An object containing the properties that differ between the two objects.
 * @throws {TypeError} - If either input is not an object or is null.
 */
export function getObjectDifference<T extends Record<string, any>>(obj1: T, obj2: T): Partial<T> {
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        throw new TypeError('Both inputs must be non-null objects');
    }
    return Object.fromEntries(
        Object.entries(obj1).filter(([key, value]) => obj2[key] !== value)
    ) as Partial<T>;
}