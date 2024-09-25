/**
 * Deep clones an object.
 * 
 * @param obj - The object to clone.
 * @returns A deep clone of the object.
 */
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

// Example usage:
// const original = { name: 'John', address: { city: 'NY' } };
// const copy = deepClone(original);
// copy.address.city = 'LA'; // Doesn't affect the original object