/**
 * Retrieves the value at a given path within an object.
 * 
 * @param {Record<string, any>} obj - The object to retrieve the value from.
 * @param {string} path - The path to the value, represented as a dot-separated string.
 * @returns {T | undefined} - The value at the given path, or undefined if the path does not exist.
 * @throws {TypeError} - If the input object is not an object or is null.
 */
export function safeGet<T>(obj: Record<string, any>, path: string): T | undefined {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return path.split('.').reduce((acc, key) => acc && (acc as Record<string, any>)[key], obj) as T | undefined;
}