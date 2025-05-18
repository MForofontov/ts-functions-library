/**
 * Calculates the number of own enumerable properties in an object.
 * 
 * @param obj - The object to count properties of.
 * @returns The number of own enumerable properties in the object.
 * @throws When input is not a non-null object.
 * 
 * @example
 * // Basic usage
 * objectSize({ a: 1, b: 2, c: 3 }); // => 3
 * objectSize({}); // => 0
 * 
 * @note Only counts own enumerable properties (using Object.keys).
 * @note Non-enumerable properties and those on the prototype chain are not included.
 */
export function objectSize(obj: Record<string, any>): number {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.keys(obj).length;
}
