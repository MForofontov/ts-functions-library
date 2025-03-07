/**
 * Deep clones an object using a custom clone function.
 * 
 * @param {T} obj - The object to clone.
 * @param {(value: any) => any} cloneFn - The custom clone function.
 * @returns {T} - A deep clone of the object.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function deepCloneWith<T>(obj: T, cloneFn: (value: any) => any): T {
    if (obj === null || typeof obj !== 'object') {
        throw new TypeError('Input must be a non-null object');
    }

    const newObj: any = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            newObj[key] = (value && typeof value === 'object') ? deepCloneWith(value, cloneFn) : cloneFn(value);
        }
    }
    return newObj;
}

// Example usage:
// const original = { name: 'John', address: { city: 'NY' } };
// const copy = deepCloneWith(original, value => value);
// copy.address.city = 'LA'; // Doesn't affect the original object