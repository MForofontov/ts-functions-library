/**
 * Converts a flattened object into a nested object.
 * 
 * This function takes an object with flattened keys (dot-separated) and converts it into a nested object.
 * 
 * @param {Record<string, any>} obj - The flattened object to convert.
 * @returns {Record<string, any>} - A nested object.
 * @throws {TypeError} - If the input is not a non-null object.
 * 
 * @example
 * const obj = { 'a.b.c': 1, 'a.b.d': 2, 'e': 3 };
 * const result = unflattenObject(obj);
 * // result: { a: { b: { c: 1, d: 2 } }, e: 3 }
 */
export function unflattenObject(obj: Record<string, any>): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    const result: Record<string, any> = {};

    for (const [key, value] of Object.entries(obj)) {
        const keys = key.split('.');
        let current = result;

        for (let i = 0; i < keys.length; i++) {
            if (i === keys.length - 1) {
                current[keys[i]] = value;
            } else {
                if (!current[keys[i]]) {
                    current[keys[i]] = {};
                }
                current = current[keys[i]];
            }
        }
    }

    return result;
}
