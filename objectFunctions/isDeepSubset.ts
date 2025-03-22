/**
 * Checks if the `subset` is a deep subset of the `obj`.
 * 
 * @param {T} subset - The subset object to check.
 * @param {T} obj - The object to check against.
 * @returns {boolean} - Returns `true` if `subset` is a deep subset of `obj`, otherwise `false`.
 */
export function isDeepSubset<T extends Record<string, any>>(subset: T, obj: T): boolean {
    if (typeof subset !== 'object' || subset === null) {
        throw new TypeError('Subset must be a non-null object');
    }
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Object must be a non-null object');
    }

    return Object.keys(subset).every(key =>
        typeof subset[key] === 'object' && subset[key] !== null
            ? isDeepSubset(subset[key], obj[key])
            : subset[key] === obj[key]
    );
}