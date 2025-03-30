/**
 * Converts a flat object with dot or square bracket notation keys back into a nested object.
 *
 * @param {Record<string, any>} obj - The flat object with dot or square bracket notation keys.
 * @returns {Record<string, any>} - A nested object.
 *
 * @example
 * const flatObj = { 'a[0].b': 1, 'a[1].c': 2, 'd.e': 3, 'f\\.g': 4 };
 * const result = fromDotNotation(flatObj);
 * // result: { a: [{ b: 1 }, { c: 2 }], d: { e: 3 }, 'f.g': 4 }
 */
export function fromDotNotation(obj: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const parts = key
                .replace(/\\\./g, '\u0000') // Temporarily replace escaped dots
                .replace(/\[(\d+)\]/g, '.$1') // Convert array indices to dot notation
                .split('.')
                .map(part => part.replace(/\u0000/g, '.')); // Restore escaped dots

            let current = result;

            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                const isLast = i === parts.length - 1;

                if (isLast) {
                    current[part] = obj[key];
                } else {
                    if (!current[part] || typeof current[part] !== 'object') {
                        // Create an array if the next part is a numeric index
                        current[part] = /^\d+$/.test(parts[i + 1]) ? [] : {};
                    }
                    current = current[part];
                }
            }
        }
    }

    return result;
}
