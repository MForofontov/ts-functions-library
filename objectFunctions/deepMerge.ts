/**
 * Deeply merges two objects.
 * 
 * @param {T} target - The target object.
 * @param {U} source - The source object to merge into the target.
 * @returns {T & U} - A new object that is a deep merge of the target and source.
 * @throws {TypeError} - If either target or source is not an object or is null.
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

// Example usage:
// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { b: { d: 3 }, e: 4 };
// deepMerge(obj1, obj2); // { a: 1, b: { c: 2, d: 3 }, e: 4 }