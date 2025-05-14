/**
 * Converts a nested object structure into a flat object with dot-notation keys.
 * 
 * @param obj - The nested object to flatten.
 * @param prefix - Optional prefix for keys (used internally for recursion).
 * @returns A new flat object where nested properties have keys joined with dots.
 * @throws When input is not a non-null object.
 * 
 * @example
 * const nested = { 
 *   user: { name: 'John', address: { city: 'NY' } },
 *   active: true 
 * };
 * flattenObject(nested);
 * // => { 'user.name': 'John', 'user.address.city': 'NY', 'active': true }
 * 
 * @example
 * // Arrays are treated as objects with numeric keys
 * flattenObject({ items: [1, 2, { id: 'a' }] });
 * // => { 'items.0': 1, 'items.1': 2, 'items.2.id': 'a' }
 * 
 * @note Unlike toDotNotation, this function always uses dot notation 
 * and doesn't handle special characters in keys.
 */
export function flattenObject(obj: Record<string, any>, prefix = ''): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.keys(obj).reduce((acc, key) => {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(acc, flattenObject(obj[key], newKey));
        } else {
            acc[newKey] = obj[key];
        }
        return acc;
    }, {} as Record<string, any>);
}
