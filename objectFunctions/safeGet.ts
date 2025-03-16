/**
 * Safely retrieves the value at the specified path of an object.
 * 
 * @param {T} obj - The object to query.
 * @param {string} path - The path of the property to get.
 * @param {any} [defaultValue] - The value returned if the resolved value is undefined.
 * @returns {any} - Returns the resolved value or the default value.
 */
export function safeGet<T>(
    obj: T,
    path: string,
    defaultValue: any = undefined
): any {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    return path
        .split('.')
        .reduce((acc, key) => (acc && (acc as any)[key] !== undefined ? (acc as any)[key] : defaultValue), obj);
}