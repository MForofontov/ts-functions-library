/**
 * Checks if a given Date object is today's date.
 * 
 * @param date - The Date object to check.
 * @returns True if the date is today, false otherwise.
 * @throws Will throw an error if the date is not a valid Date object or is NaN.
 */
export function isToday(date: Date): boolean {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
}

// Example usage:
// const date = new Date();
// isToday(date); // true if today