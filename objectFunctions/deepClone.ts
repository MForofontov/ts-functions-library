/**
 * Deep clones an object.
 * 
 * @param {T} obj - The object to clone.
 * @returns {T} - A deep clone of the object.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function deepClone<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return JSON.parse(JSON.stringify(obj));
}

// Example usage:
// const original = { name: 'John', address: { city: 'NY' } };
// const copy = deepClone(original);
// copy.address.city = 'LA'; // Doesn't affect the original object