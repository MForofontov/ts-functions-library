/**
 * Sorts an array of objects based on a given property.
 * 
 * @param arr - The array of objects to sort.
 * @param key - The property to sort by.
 * @returns The sorted array.
 */
export function sortBy<T>(arr: T[], key: keyof T): T[] {
    return arr.slice().sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];

        if (aValue instanceof Date && bValue instanceof Date) {
            return aValue.getTime() - bValue.getTime();
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return aValue.localeCompare(bValue);
        }

        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return aValue - bValue;
        }

        if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
            return (aValue === bValue) ? 0 : aValue ? -1 : 1;
        }

        if (typeof aValue === 'bigint' && typeof bValue === 'bigint') {
            return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        }

        throw new Error(`Unsupported types for sorting: ${typeof aValue} and ${typeof bValue}`);
    });
}
