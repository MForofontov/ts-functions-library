/**
 * Reconstructs a nested object structure from a flat object with dot or square bracket notation keys.
 * Handles arrays, nested objects, and escaped special characters.
 * 
 * @param obj - The flat object with dot or square bracket notation keys.
 * @returns A nested object structure preserving the original hierarchy.
 * @throws When input is not a non-null object.
 * 
 * @example
 * // Basic dot notation
 * fromDotNotation({ 'user.name': 'John', 'user.address.city': 'NY' });
 * // => { user: { name: 'John', address: { city: 'NY' } } }
 * 
 * @note Array indices in square brackets create array elements at the specified positions.
 * @note Dots can be escaped with backslashes to represent literal dots in property names.
 */
export function fromDotNotation(obj: Record<string, any>): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

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
