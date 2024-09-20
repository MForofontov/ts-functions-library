/**
 * Adds a specified number of days to a Date object.
 * 
 * @param date - The original Date object.
 * @param days - The number of days to add.
 * @returns A new Date object with the days added.
 */
export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Example usage:
// const today = new Date();
// addDays(today, 10); // Adds 10 days to the current date
