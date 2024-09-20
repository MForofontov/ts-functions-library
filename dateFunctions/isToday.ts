/**
 * Checks if a given Date object is today's date.
 * 
 * @param date - The Date object to check.
 * @returns True if the date is today, false otherwise.
 */
export function isToday(date: Date): boolean {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
}

// Example usage:
// const date = new Date();
// isToday(date); // true if today
