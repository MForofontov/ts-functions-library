/**
 * Gets the last date of the month prior to the given Date object.
 * 
 * @param date - The Date object to get the last day of the previous month from.
 * @returns A new Date object representing the last day of the previous month.
 */
export function getLastDayOfPreviousMonth(date: Date): Date {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 0);
}

// Example usage:
// const today = new Date();
// getLastDayOfPreviousMonth(today); // Last day of the month before today
