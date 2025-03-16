/**
 * Safely sets the value at the specified path of an object.
 * 
 * @param {T} obj - The object to modify.
 * @param {string} path - The path of the property to set.
 * @param {any} value - The value to set.
 * @throws {TypeError} - If the input object is not an object or is null.
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