/**
 * Checks if a value is a plain object.
 * 
 * @param {any} value - The value to check.
 * @returns {boolean} - True if the value is a plain object, false otherwise.
 */
export function isPlainObject(value: any): boolean {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    return Object.prototype.toString.call(value) === '[object Object]';
}

// Example usage:
// console.log(isPlainObject({})); // true
// console.log(isPlainObject([])); // false
// console.log(isPlainObject(null)); // false
// console.log(isPlainObject('string')); // false