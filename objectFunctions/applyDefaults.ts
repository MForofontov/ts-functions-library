/**
 * Applies default values to an object. If a key exists in both the object and the defaults,
 * the value from the object takes precedence.
 * 
 * @template T - The type of the input object.
 * @param {T} obj - The object to apply defaults to.
 * @param {Partial<T>} defaults - The default values to apply.
 * @returns {T} - A new object with defaults applied.
 * @throws {TypeError} - If the input object or defaults are not objects or are null.
 *
 * @example
 * const obj = { a: 1, b: 2 };
 * const defaults = { b: 3, c: 4 };
 * const result = applyDefaults(obj, defaults);
 * // result: { a: 1, b: 2, c: 4 }
 */
export function applyDefaults<T extends Record<string, any>>(obj: T, defaults: Partial<T>): T {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('The first argument must be a non-null object');
    }
    if (typeof defaults !== 'object' || defaults === null) {
        throw new TypeError('The second argument must be a non-null object');
    }

    return { ...defaults, ...obj };
}