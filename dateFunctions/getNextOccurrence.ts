/**
 * Gets the date of the next occurrence of a specific day of the week.
 * 
 * @param date - The starting Date object.
 * @param day - The day of the week to find (0 for Sunday, 1 for Monday, etc.).
 * @returns A new Date object representing the next occurrence of the specified day.
 * @throws Will throw an error if the date is invalid or if the day is not between 0 and 6.
 */
export function getNextOccurrence(date: Date, day: number): Date {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    if (isNaN(day) || day < 0 || day > 6) {
        throw new Error('Invalid day value. It must be a number between 0 (Sunday) and 6 (Saturday).');
    }

    const result = new Date(date);
    result.setDate(result.getDate() + (day + 7 - result.getDay()) % 7);
    return result;
}

// Example usage:
// const today = new Date();
// getNextOccurrence(today, 1); // Next Monday from today