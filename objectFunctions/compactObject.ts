/**
 * Removes properties with null or undefined values from an object.
 * 
 * @param {T} obj - The object to compact.
 * @returns {Partial<T>} - A new object with properties that have non-null and non-undefined values.
 */
export function compactObject<T extends Record<string, any>>(obj: T): Partial<T> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value != null)
    ) as Partial<T>;
}