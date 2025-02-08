/**
 * Computes the difference between two objects.
 * 
 * This function returns an object containing the properties that are different between
 * the two input objects. If a property exists in both objects but has different values,
 * it will be included in the result.
 * 
 * @param {Record<string, any>} obj1 - The first object.
 * @param {Record<string, any>} obj2 - The second object.
 * @returns {Record<string, any>} - An object containing the differences.
 * @throws {TypeError} - If either input is not a non-null object.
 * 
 * @example
 * const obj1 = { a: 1, b: 2, c: 3 };
 * const obj2 = { a: 1, b: 4, d: 5 };
 * const result = getObjectDifference(obj1, obj2);
 * // result: { b: 4, c: undefined, d: 5 }
 */
export function getObjectDifference(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        throw new TypeError('Both inputs must be non-null objects');
    }

    const diff: Record<string, any> = {};

    const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    allKeys.forEach(key => {
        if (obj1[key] !== obj2[key]) {
            diff[key] = obj2[key];
        }
    });

    return diff;
}