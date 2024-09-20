/**
 * Gets the start date of the week for a given date.
 * 
 * @param date - The Date object to get the week start from.
 * @param startOfWeek - The start day of the week (0 for Sunday, 1 for Monday, etc.).
 * @returns A new Date object representing the start of the week.
 */
export function getStartOfWeek(date: Date, startOfWeek: number = 0): Date {
    const diff = (date.getDay() - startOfWeek + 7) % 7;
    const startOfWeekDate = new Date(date);
    startOfWeekDate.setDate(date.getDate() - diff);
    startOfWeekDate.setHours(0, 0, 0, 0);
    return startOfWeekDate;
}

// Example usage:
// const date = new Date('2024-09-19');
// getStartOfWeek(date); // Gets the Sunday of the week containing '2024-09-19'
