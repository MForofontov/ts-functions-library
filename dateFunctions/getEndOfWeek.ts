import { getStartOfWeek } from './getStartOfWeek';

/**
 * Gets the end date of the week for a given date.
 * 
 * @param date - The Date object to get the week's end date from.
 * @param startOfWeek - The start day of the week (0 for Sunday, 1 for Monday, etc.).
 * @returns A new Date object representing the end of the week.
 */
export function getEndOfWeek(date: Date, startOfWeek: number = 0): Date {
    const start = getStartOfWeek(date, startOfWeek);
    const endOfWeekDate = new Date(start);
    endOfWeekDate.setDate(start.getDate() + 6);
    endOfWeekDate.setHours(23, 59, 59, 999);
    return endOfWeekDate;
}

// Example usage:
// const date = new Date('2024-09-19');
// getEndOfWeek(date); // Gets the Saturday of the week containing '2024-09-19'
