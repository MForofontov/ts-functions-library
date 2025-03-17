/**
 * Creates an object composed of keys generated from the results of running each element of `array` through `key`.
 * 
 * @param {T[]} array - The array to iterate over.
 * @param {keyof T} key - The key to group by.
 * @returns {Record<string, T>} - An object composed of the key-value pairs.
 * @throws {TypeError} - If the input is not an array.
 */
export function keyBy<T extends Record<string, any>>(
    array: T[],
    key: keyof T
): Record<string, T> {
    if (!Array.isArray(array)) {
        throw new TypeError('Input must be an array');
    }

    return Object.fromEntries(array.map(item => [String(item[key]), item]));
}