/**
 * Deeply freezes an object, making it immutable.
 * 
 * @param {T} obj - The object to freeze.
 * @returns {T} - The frozen object.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function deepFreeze<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => {
        const value = (obj as any)[key];
        if (typeof value === 'object' && value !== null) {
            deepFreeze(value);
        }
    });
    return obj;
}