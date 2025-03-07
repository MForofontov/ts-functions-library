/**
 * Maps the values of an object using a provided function.
 * 
 * @param {Record<string, T>} obj - The object to map.
 * @param {(value: T, key: string) => U} fn - The function to apply to each value.
 * @returns {Record<string, U>} - A new object with the mapped values.
 */
export function objectMap<T, U>(obj: Record<string, T>, fn: (value: T, key: string) => U): Record<string, U> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    return Object.keys(obj).reduce((acc, key) => {
        acc[key] = fn(obj[key], key);
        return acc;
    }, {} as Record<string, U>);
}

// Example usage:
// const original = { a: 1, b: 2, c: 3 };
// const mapped = objectMap(original, (value, key) => value * 2);
// console.log(mapped); // { a: 2, b: 4, c: 6 }