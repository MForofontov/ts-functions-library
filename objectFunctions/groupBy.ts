/**
 * Groups the elements of an array based on the specified key.
 * 
 * @param {T[]} array - The array to group.
 * @param {keyof T} key - The key to group by.
 * @returns {Record<string, T[]>} - An object where the keys are the group names and the values are arrays of elements in each group.
 */
export function groupBy<T>(
    array: T[],
    key: keyof T
): Record<string, T[]> {
    return array.reduce((acc, item) => {
        const group = item[key] as unknown as string;
        if (!acc[group]) acc[group] = [];
        acc[group].push(item);
        return acc;
    }, {} as Record<string, T[]>);
}