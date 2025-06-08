/**
 * Safely sets a value at a specified path in an object, creating intermediate objects if needed.
 * Uses dot notation to navigate nested properties.
 * 
 * @param obj - The object to modify.
 * @param path - The dot-notation path where the value should be set (e.g., 'user.address.city').
 * @param value - The value to set at the specified path.
 * @throws When input is not a non-null object.
 * 
 * @example
 * // Set a value in a nested path, creating objects as needed
 * const user = { name: 'John' };
 * safeSet(user, 'address.city', 'New York');
 * // user becomes: { name: 'John', address: { city: 'New York' } }
 * 
 * @note Modifies the original object and does not create a copy.
 * @note Creates empty objects for any missing intermediate properties.
 * @note Only supports dot notation and doesn't handle array indices.
 */
export function safeSet<T extends Record<string, any>>(
    obj: T,
    path: string,
    value: any
): void {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    const keys = path.split('.');
    let current: any = obj;
    while (keys.length > 1) {
        const key = keys.shift()!;
        if (!(key in current)) current[key] = {};
        current = current[key];
    }
    current[keys[0]] = value;
}
