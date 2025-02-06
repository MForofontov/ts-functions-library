/**
 * Sets the value at a given path within an object.
 * 
 * @param {Record<string, any>} obj - The object to set the value in.
 * @param {string} path - The path to the value, represented as a dot-separated string.
 * @param {any} value - The value to set at the given path.
 * @throws {TypeError} - If the input object is not an object or is null.
 */
export function setNestedValue(obj: Record<string, any>, path: string, value: any): void {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    const keys = path.split('.');
    let current: any = obj;

    keys.slice(0, -1).forEach((key) => {
        if (!current[key] || typeof current[key] !== 'object') {
            current[key] = {};
        }
        current = current[key];
    });

    current[keys[keys.length - 1]] = value;
}