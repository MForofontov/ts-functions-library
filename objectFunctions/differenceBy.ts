/**
 * Returns an object containing the key-value pairs from the first object (`obj1`) 
 * that are not considered equal to the corresponding key-value pairs in the second object (`obj2`),
 * based on the provided comparator function.
 *
 * @template T - The type of the input objects.
 * @param {T} obj1 - The first object to compare.
 * @param {T} obj2 - The second object to compare.
 * @param {(a: any, b: any) => boolean} comparator - A function to compare values from both objects.
 * @returns {Partial<T>} - A new object containing the key-value pairs from `obj1` that differ from `obj2`.
 * @throws {TypeError} - If either `obj1` or `obj2` is not an object, or if `comparator` is not a function.
 *
 * @example
 * const obj1 = { a: 1, b: 2, c: 3 };
 * const obj2 = { a: 1, b: 4, c: 3 };
 * const comparator = (a, b) => a === b;
 * const result = differenceBy(obj1, obj2, comparator);
 * // result: { b: 2 }
 */
export function differenceBy<T extends Record<string, any>>(
    obj1: T,
    obj2: T,
    comparator: (a: any, b: any) => boolean
): Partial<T> {
    if (typeof obj1 !== 'object' || obj1 === null) {
        throw new TypeError('First argument must be a non-null object');
    }
    if (typeof obj2 !== 'object' || obj2 === null) {
        throw new TypeError('Second argument must be a non-null object');
    }
    if (typeof comparator !== 'function') {
        throw new TypeError('Comparator must be a function');
    }

    return Object.fromEntries(
        Object.entries(obj1).filter(([key, value]) => !comparator(value, obj2[key]))
    ) as Partial<T>; // Explicitly cast the result to Partial<T>
}