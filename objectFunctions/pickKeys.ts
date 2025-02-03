/**
 * Picks specified keys from an object.
 * 
 * @param {T} obj - The object to pick keys from.
 * @param {Array<keyof T>} keysToPick - The keys to pick from the object.
 * @returns {Partial<T>} - A new object with the specified keys picked.
 */
export function pickKeys<T extends Record<string, any>>(obj: T, keysToPick: (keyof T)[]): Partial<T> {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => keysToPick.includes(key as keyof T))) as Partial<T>;
}