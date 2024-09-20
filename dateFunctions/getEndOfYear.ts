/**
 * Gets the end date of the year for a given date.
 * 
 * @param date - The Date object to get the year's end from.
 * @returns A new Date object representing the end of the year.
 */
export function getEndOfYear(date: Date): Date {
    return new Date(date.getFullYear(), 11, 31);
}

// Example usage:
// const date = new Date('2024-09-19');
// getEndOfYear(date); // '2024-12-31'
