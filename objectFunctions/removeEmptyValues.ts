/**
 * Removes properties with empty values (undefined or null) from an object.
 * 
 * @param {T} obj - The object to remove empty values from.
 * @returns {Partial<T>} - A new object with empty values removed.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function removeEmptyValues<T extends Record<string, any>>(obj: T): Partial<T> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value !== undefined && value !== null)
    ) as Partial<T>;
}