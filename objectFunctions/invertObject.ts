/**
 * Inverts the keys and values of an object.
 * 
 * @param {Record<string, any>} obj - The object to invert.
 * @returns {Record<string, any>} - A new object with the keys and values inverted.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function invertObject(obj: Record<string, any>): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [String(value), key]));
}

// Example usage:
// const original = { a: 1, b: 2, c: 3 };
// const inverted = invertObject(original);
// console.log(inverted); // { '1': 'a', '2': 'b', '3': 'c' }