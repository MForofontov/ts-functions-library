/**
 * Applies default values to an object.
 * 
 * @param {T} obj - The object to apply defaults to.
 * @param {Partial<T>} defaults - The default values to apply.
 * @returns {T} - A new object with defaults applied.
 * @throws {TypeError} - If the input object or defaults are not objects or are null.
 */
export function applyDefaults<T extends Record<string, any>>(obj: T, defaults: Partial<T>): T {
    if (typeof obj !== 'object' || obj === null || typeof defaults !== 'object' || defaults === null) {
        throw new TypeError('Both inputs must be non-null objects');
    }
    return { ...defaults, ...obj };
}