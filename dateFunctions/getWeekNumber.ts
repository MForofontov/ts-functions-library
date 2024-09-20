/**
 * Gets the week number of the year for a given date.
 * 
 * @param date - The Date object to get the week number for.
 * @returns The week number of the year.
 */
export function getWeekNumber(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + start.getDay() + 1) / 7);
}

// Example usage:
// const date = new Date('2024-09-19');
// getWeekNumber(date); // e.g., 38
