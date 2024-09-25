/**
 * Flips the keys and values of an object.
 * 
 * @param obj - The object to flip.
 * @returns A new object with keys and values swapped.
 */
export function flipObject<T extends Record<string, any>>(obj: T): Record<T[keyof T], keyof T> {
    return Object.keys(obj).reduce((acc, key) => {
        acc[obj[key]] = key;
        return acc;
    }, {} as Record<T[keyof T], keyof T>);
}

// Example usage:
// flipObject({ a: 1, b: 2 }); // { 1: "a", 2: "b" }