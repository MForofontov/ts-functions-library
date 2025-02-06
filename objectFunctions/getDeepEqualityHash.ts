/**
 * Generates a hash code for an object based on its deep equality.
 * This function is used to group objects with similar structures and values.
 * 
 * @param {any} obj - The object to generate a hash code for.
 * @returns {number} - A hash code representing the object's structure and values.
 * @throws {TypeError} - If the input is not an object or is null.
 */
export function getDeepEqualityHash(obj: any): number {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return JSON.stringify(obj).split('').reduce((hash, char) => {
        return ((hash << 5) - hash) + char.charCodeAt(0);
    }, 0);
}

// Example usage:
// getDeepEqualityHash({ a: 1, b: 2 }); // Generates a hash code for the object