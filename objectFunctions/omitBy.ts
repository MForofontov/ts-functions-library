/**
 * Creates an object composed of the properties of the input object that do not match the predicate.
 * 
 * @param {Record<string, any>} obj - The source object.
 * @param {(value: any, key: string) => boolean} predicate - The function invoked per property.
 * @returns {Partial<Record<string, any>>} - The new object.
 */
export function omitBy<T extends Record<string, any>>(
    obj: T,
    predicate: (value: any, key: string) => boolean
): Partial<T> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => !predicate(value, key))
    ) as Partial<T>;
}

// Example usage:
// const obj = { a: 1, b: 2, c: 3 };
// const result = omitBy(obj, value => value === 2);
// console.log(result); // { a: 1, c: 3 }