import { getStartOfWeek } from './getStartOfWeek';
import { getEndOfWeek } from './getEndOfWeek';

/**
 * Gets the first and last day of the week for a given Date object.
 * 
 * @param date - The Date object to get the week's start and end dates for.
 * @param startOfWeek - The start day of the week (0 for Sunday, 1 for Monday, etc.).
 * @returns An object with the start and end dates of the week.
 */
export function getWeekRange(date: Date, startOfWeek: number = 0): { start: Date, end: Date } {
    const start = getStartOfWeek(date, startOfWeek);
    const end = getEndOfWeek(date, startOfWeek);
    return { start, end };
}

// Example usage:
// const date = new Date('2024-09-19');
// getWeekRange(date); // { start: '2024-09-15', end: '2024-09-21' }
