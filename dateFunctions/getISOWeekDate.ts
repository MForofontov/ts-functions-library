import { getWeekNumber } from './getWeekNumber';

/**
 * Gets the ISO week date (YYYY-Www-D) for a given Date object.
 * 
 * @param date - The Date object to get the ISO week date for.
 * @returns The ISO week date as a string.
 */
export function getISOWeekDate(date: Date): string {
    const year = date.getFullYear();
    const weekNumber = getWeekNumber(date);
    const dayOfWeek = date.getDay();
    return `${year}-W${String(weekNumber).padStart(2, '0')}-${String(dayOfWeek).padStart(1, '0')}`;
}

// Example usage:
// const date = new Date('2024-09-19');
// getISOWeekDate(date); // e.g., '2024-W38-4'
