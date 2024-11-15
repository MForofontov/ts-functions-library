/**
 * Calculates the number of days between two dates.
 * 
 * @param date1 - The first Date object.
 * @param date2 - The second Date object.
 * @returns The number of days between the two dates.
 * @throws Will throw an error if either date is invalid or if the first date is later than the second date.
 */
export function daysBetween(date1: Date, date2: Date): number {
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        throw new Error('Invalid date');
    }

    if (date1 > date2) {
        throw new Error('The first date must be earlier than the second date');
    }

    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    return Math.floor(diffInTime / oneDay);
}

// Example usage:
// const startDate = new Date('2024-01-01');
// const endDate = new Date('2024-12-31');
// daysBetween(startDate, endDate); // 364