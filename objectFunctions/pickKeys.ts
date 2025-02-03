/**
 * Picks specified keys from an object.
 * 
 * @param {T} obj - The object to pick keys from.
 * @param {Array<keyof T>} keysToPick - The keys to pick from the object.
 * @returns {Partial<T>} - A new object with the specified keys picked.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function pickKeys<T extends Record<string, any>>(obj: T, keysToPick: (keyof T)[]): Partial<T> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.fromEntries(Object.entries(obj).filter(([key]) => keysToPick.includes(key as keyof T))) as Partial<T>;
}