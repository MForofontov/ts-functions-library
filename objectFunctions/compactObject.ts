/**
 * Creates a new object with all properties from the source except those with null or undefined values.
 * 
 * @param obj - The source object to process.
 * @returns A new object containing only properties with non-null and non-undefined values.
 * @throws When input is not a non-null object.
 *
 * @example
 * const result = compactObject({ a: 1, b: null, c: undefined, d: 0, e: '' });
 * // => { a: 1, d: 0, e: '' }
 */
export function compactObject<T extends Record<string, any>>(obj: T): Partial<T> {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }

    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value != null)
    ) as Partial<T>;
}
