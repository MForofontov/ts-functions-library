/**
 * Omits specified keys from an object.
 * 
 * @param {Record<string, any>} obj - The object to omit keys from.
 * @param {string[]} keysToOmit - The keys to omit from the object.
 * @returns {Record<string, any>} - A new object with the specified keys omitted.
 */
export function omitKeys(obj: Record<string, any>, keysToOmit: string[]): Record<string, any> {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !keysToOmit.includes(key)));
}
