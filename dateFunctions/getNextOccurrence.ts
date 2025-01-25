/**
 * Gets the next occurrence of a specified day of the week for a given date.
 * 
 * @param date - The Date object to start from.
 * @param dayOfWeek - The day of the week to find the next occurrence of (0 for Sunday, 1 for Monday, etc.).
 * @returns A new Date object representing the next occurrence of the specified day of the week.
 * @throws Will throw an error if the date is invalid or if the dayOfWeek is not between 0 and 6.
 */
export function getNextOccurrence(date: Date, dayOfWeek: number): Date {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    if (isNaN(dayOfWeek) || dayOfWeek < 0 || dayOfWeek > 6) {
        throw new Error('Invalid dayOfWeek value. It must be a number between 0 (Sunday) and 6 (Saturday).');
    }

    const resultDate = new Date(date);
    const currentDay = date.getDay();
    const daysUntilNextOccurrence = (dayOfWeek - currentDay + 7) % 7 || 7;
    resultDate.setDate(date.getDate() + daysUntilNextOccurrence);

    return resultDate;
}

// Example usage:
// const date = new Date('2023-09-19'); // Tuesday
// console.log(getNextOccurrence(date, 4)); // Next Thursday