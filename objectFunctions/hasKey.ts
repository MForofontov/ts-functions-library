/**
 * Checks if an object has the specified property as its own, non-inherited property.
 * 
 * @param obj - The object to check.
 * @param key - The property name to look for.
 * @returns True if the property exists directly on the object, false otherwise.
 * @throws When input is not a non-null object.
 * 
 * @example
 * // Simple property check
 * hasKey({ a: 1, b: 2 }, 'a'); // => true
 * hasKey({ a: 1, b: 2 }, 'c'); // => false
 * 
 * @note Unlike the 'in' operator, this only checks own properties,
 * not those inherited from the prototype chain.
 */
export function hasKey(obj: Record<string, any>, key: string): boolean {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.prototype.hasOwnProperty.call(obj, key);
}
