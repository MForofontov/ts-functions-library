import { getWeekNumber } from './getWeekNumber';

/**
 * Gets the ISO week date (YYYY-Www-D) for a given Date object.
 * 
 * @param date - The Date object to get the ISO week date for.
 * @returns The ISO week date as a string.
 * @throws Will throw an error if the date is invalid.
 */
export function getISOWeekDate(date: Date): string {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    const year = date.getFullYear();
    const weekNumber = getWeekNumber(date);
    const dayOfWeek = date.getDay() || 7; // ISO week starts on Monday, so Sunday should be 7
    return `${year}-W${String(weekNumber).padStart(2, '0')}-${dayOfWeek}`;
}

// Example usage:
// const date = new Date('2024-09-19');
// getISOWeekDate(date); // e.g., '2024-W38-4'