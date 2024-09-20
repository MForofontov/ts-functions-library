/**
 * Checks if a given date is a weekend.
 * 
 * @param date - The Date object to check.
 * @returns True if the date is a Saturday or Sunday, false otherwise.
 */
export function isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6;
}

// Example usage:
// const date = new Date('2024-09-21'); // Saturday
// isWeekend(date); // true
