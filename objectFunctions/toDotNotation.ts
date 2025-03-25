/**
 * Converts a nested object into a flat object with dot notation keys.
 *
 * @param {Record<string, any>} obj - The input object to be converted.
 * @param {string} [prefix=''] - The prefix for nested keys (used internally for recursion).
 * @returns {Record<string, any>} - A flat object with keys in dot notation.
 *
 * @example
 * const obj = { a: { b: { c: 1 }, d: 2 }, e: 3 };
 * const result = toDotNotation(obj);
 * // result: { 'a.b.c': 1, 'a.d': 2, 'e': 3 }
 */
export function toDotNotation(obj: Record<string, any>, prefix = ''): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    const result: Record<string, any> = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                Object.assign(result, toDotNotation(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}
