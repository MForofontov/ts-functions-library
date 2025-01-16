/**
 * Gets various parts of a Date object.
 * 
 * @param date - The Date object to extract parts from.
 * @returns An object containing year, month, day, hours, minutes, and seconds.
 */
export function getDateParts(date: Date): { year: number, month: number, day: number, hours: number, minutes: number, seconds: number } {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1, // Months are zero-based
        day: date.getUTCDate(),
        hours: date.getUTCHours(),
        minutes: date.getUTCMinutes(),
        seconds: date.getUTCSeconds()
    };
}

// Example usage:
// const date = new Date('2024-09-19T15:45:30');
// getDateParts(date); // { year: 2024, month: 9, day: 19, hours: 15, minutes: 45, seconds: 30 }