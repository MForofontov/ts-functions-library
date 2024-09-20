/**
 * Compares two Date objects.
 * 
 * @param date1 - The first Date object.
 * @param date2 - The second Date object.
 * @returns -1 if date1 is before date2, 1 if date1 is after date2, and 0 if they are the same.
 */
export function compareDates(date1: Date, date2: Date): number {
    return date1.getTime() - date2.getTime();
}

// Example usage:
// const date1 = new Date('2024-09-19');
// const date2 = new Date('2024-09-20');
// compareDates(date1, date2); // -86400000 (difference in milliseconds)
