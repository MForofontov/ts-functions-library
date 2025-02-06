/**
 * Flips the keys and values of an object.
 * 
 * @param {T} obj - The object to flip.
 * @returns {Record<string, string>} - A new object with keys and values swapped.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function flipObject<T extends Record<string, any>>(obj: T): Record<string, string> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Object.keys(obj).reduce((acc: Record<string, string>, key: string) => {
        acc[String(obj[key])] = key;
        return acc;
    }, {});
}

// Example usage:
// flipObject({ a: 1, b: 2 }); // { "1": "a", "2": "b" }