/**
 * Recursively merges objects, combining their properties and nested structures.
 * 
 * @param target - The base object to merge into.
 * @param source - The object whose properties will be merged into the target.
 * @returns A new object containing the merged properties from both inputs.
 * @throws When either input is not a non-null object.
 * 
 * @example
 * // Merging nested objects
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { b: { d: 3 }, e: 4 };
 * deepMerge(obj1, obj2);
 * // => { a: 1, b: { c: 2, d: 3 }, e: 4 }
 * 
 * @note Creates a new object and doesn't modify the inputs.
 * @note Arrays are concatenated rather than recursively merged.
 * @note For conflicting primitive values, the source value overwrites the target value.
 */
export function deepMerge<T extends object, U extends object>(target: T, source: U): T & U {
    const isObject = (obj: any): obj is object => obj && typeof obj === 'object';

    if (!isObject(target) || !isObject(source)) {
        throw new TypeError('Both target and source must be non-null objects');
    }

    return [target, source].reduce((acc, obj) => {
        Object.keys(obj).forEach(key => {
            const targetValue = (acc as any)[key];
            const sourceValue = (obj as any)[key];

            if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
                (acc as any)[key] = targetValue.concat(...sourceValue);
            } else if (isObject(targetValue) && isObject(sourceValue)) {
                (acc as any)[key] = deepMerge(targetValue, sourceValue);
            } else {
                (acc as any)[key] = sourceValue;
            }
        });
        return acc;
    }, { ...target } as T & U) as T & U;
}
