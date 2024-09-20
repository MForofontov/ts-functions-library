import { getStartOfWeek } from './getStartOfWeek';

/**
 * Gets the first date of the current week for a given Date object.
 * 
 * @param date - The Date object to get the week's start date for.
 * @param startOfWeek - The start day of the week (0 for Sunday, 1 for Monday, etc.).
 * @returns A new Date object representing the first day of the current week.
 */
export function getFirstDateOfWeek(date: Date, startOfWeek: number = 0): Date {
    const start = getStartOfWeek(date, startOfWeek);
    return start;
}

// Example usage:
// const date = new Date();
// getFirstDateOfWeek(date); // First date of the week containing today
