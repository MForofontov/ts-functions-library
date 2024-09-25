/**
 * Deeply merges two objects.
 * 
 * @param target - The target object.
 * @param source - The source object to merge into the target.
 * @returns A new object that is a deep merge of the target and source.
 */
export function deepMerge<T extends object, U extends object>(target: T, source: U): T & U {
    const isObject = (obj: any): obj is object => obj && typeof obj === 'object';
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
    }, { ...target } as T & U);
}

// Example usage:
// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { b: { d: 3 }, e: 4 };
// deepMerge(obj1, obj2); // { a: 1, b: { c: 2, d: 3 }, e: 4 }