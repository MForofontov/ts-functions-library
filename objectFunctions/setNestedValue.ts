/**
 * Sets a nested value within an object.
 * 
 * This function sets a value at a specified path within an object. If the path does not exist, it will be created.
 * 
 * @param {Record<string, any>} obj - The object to set the value in.
 * @param {string} path - The path to the value, represented as a dot-separated string.
 * @param {any} value - The value to set.
 * @returns {void}
 * @throws {TypeError} - If the input object is not a non-null object.
 * 
 * @example
 * const obj = { a: { b: { c: 3 } } };
 * setNestedValue(obj, 'a.b.c', 4);
 * // obj: { a: { b: { c: 4 } } }
 */
export function setNestedValue(obj: Record<string, any>, path: string, value: any): void {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        if (typeof current[keys[i]] !== 'object' || current[keys[i]] === null) {
            current[keys[i]] = {};
        }
        current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
}