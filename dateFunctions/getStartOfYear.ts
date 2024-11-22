/**
 * Gets the start date of the year for a given date.
 * 
 * @param date - The Date object to get the year's start from.
 * @returns A new Date object representing the start of the year.
 */
export function getStartOfYear(date: Date): Date {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }
    return new Date(date.getFullYear(), 0, 1);
}

// Example usage:
// const date = new Date('2024-09-19');
// getStartOfYear(date); // '2024-01-01'