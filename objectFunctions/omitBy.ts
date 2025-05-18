/**
 * Creates a new object excluding properties that satisfy the predicate function.
 * Returns a filtered version of the original object.
 * 
 * @param obj - The source object to filter properties from.
 * @param predicate - Function that determines which properties to exclude.
 *                    Return true to omit a property, false to keep it.
 * @returns A new object with all properties where predicate returned false.
 * @throws When input is not a non-null object.
 * 
 * @example
 * // Remove all properties with value 2
 * const obj = { a: 1, b: 2, c: 3 };
 * omitBy(obj, value => value === 2);
 * // => { a: 1, c: 3 }
 * 
 * @note Creates a new object and doesn't modify the original.
 * @note Similar to Array.prototype.filter() but for object properties.
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
