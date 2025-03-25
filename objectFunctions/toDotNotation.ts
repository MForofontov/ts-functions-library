/**
 * Converts a nested object into a flat object with dot or square bracket notation keys.
 *
 * @param {Record<string, any>} obj - The input object to be converted.
 * @param {string} [prefix=''] - The prefix for nested keys (used internally for recursion).
 * @returns {Record<string, any>} - A flat object with keys in dot or square bracket notation.
 *
 * @example
 * const obj = { a: [{ b: 1 }, { c: 2 }], d: { e: 3 }, 'f.g': 4 };
 * const result = toDotNotation(obj);
 * // result: { 'a[0].b': 1, 'a[1].c': 2, 'd.e': 3, 'f\\.g': 4 }
 */
export function toDotNotation(obj: Record<string, any>, prefix = ''): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    const result: Record<string, any> = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // Use square bracket notation for array indices or keys with special characters
            const isArrayIndex = /^\d+$/.test(key);
            const needsBrackets = isArrayIndex || /[.\s]/.test(key);
            const escapedKey = key.replace(/\\/g, '\\\\').replace(/\./g, '\\.'); // Escape dots in keys
            const newKey = prefix
                ? needsBrackets
                    ? `${prefix}[${escapedKey}]`
                    : `${prefix}.${key}`
                : key;

            if (Array.isArray(obj[key])) {
                // Flatten arrays
                obj[key].forEach((item, index) => {
                    const arrayKey = `${newKey}[${index}]`;
                    if (typeof item === 'object' && item !== null) {
                        Object.assign(result, toDotNotation(item, arrayKey));
                    } else {
                        result[arrayKey] = item;
                    }
                });
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                // Recursively flatten nested objects
                Object.assign(result, toDotNotation(obj[key], newKey));
            } else {
                // Add primitive values directly
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}