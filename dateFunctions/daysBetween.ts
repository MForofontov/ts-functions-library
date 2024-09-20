/**
 * Calculates the number of days between two dates.
 * 
 * @param date1 - The first Date object.
 * @param date2 - The second Date object.
 * @returns The number of days between the two dates.
 */
export function daysBetween(date1: Date, date2: Date): number {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    return Math.floor(diffInTime / oneDay);
}

// Example usage:
// const startDate = new Date('2024-01-01');
// const endDate = new Date('2024-12-31');
// daysBetween(startDate, endDate); // 364
