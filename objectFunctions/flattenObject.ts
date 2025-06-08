/**
 * Converts a nested object structure into a flat object with dot notation and 
 * bracket notation for arrays and special characters.
 * 
 * @param obj - The nested object to flatten.
 * @param prefix - The prefix for nested keys (used internally for recursion).
 * @returns A flat object with keys in dot or square bracket notation.
 * @throws When input is not a non-null object.
 * 
 * @example
 * // Complex nested structure with arrays and special characters
 * const nested = { 
 *   user: { name: 'John', address: { city: 'NY' } },
 *   scores: [85, 90, 95],
 *   items: [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }],
 *   'property.with.dots': true
 * };
 * 
 * toDotNotation(nested);
 * // => { 
 * //   'user.name': 'John',
 * //   'user.address.city': 'NY',
 * //   'scores[0]': 85,
 * //   'scores[1]': 90,
 * //   'scores[2]': 95,
 * //   'items[0].id': 1,
 * //   'items[0].name': 'Laptop',
 * //   'items[1].id': 2,
 * //   'items[1].name': 'Phone',
 * //   'property\\.with\\.dots': true
 * // }
 * 
 * @note Array indices use square bracket notation: 'items[0].name'
 * @note Dots in property names are escaped with backslashes: 'property\\.with\\.dots'
 * @note Empty objects and arrays are preserved in the flattened structure
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
