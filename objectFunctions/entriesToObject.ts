/**
 * Converts an array of key-value pairs into an object.
 * 
 * @param {[string, any][]} entries - The array of key-value pairs.
 * @returns {T} - The resulting object.
 * @throws {TypeError} - If the input is not an array of key-value pairs.
 */
export function entriesToObject<T>(entries: [string, any][]): T {
    if (!Array.isArray(entries)) {
        throw new TypeError('Input must be an array of key-value pairs');
    }

    for (const entry of entries) {
        if (!Array.isArray(entry) || entry.length !== 2 || typeof entry[0] !== 'string') {
            throw new TypeError('Each entry must be a [string, any] pair');
        }
    }

    return Object.fromEntries(entries) as T;
}