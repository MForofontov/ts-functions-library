/**
 * Gets the end date of the week for a given date.
 * 
 * @param date - The Date object to get the week's end date from.
 * @param startOfWeek - The start day of the week (0 for Sunday, 1 for Monday, etc.).
 * @returns A new Date object representing the end of the week.
 * @throws Will throw an error if the date is invalid or if the startOfWeek is not between 0 and 6.
 */
export function getEndOfWeek(date: Date, startOfWeek: number = 0): Date {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    if (isNaN(startOfWeek) || startOfWeek < 0 || startOfWeek > 6) {
        throw new Error('Invalid startOfWeek value. It must be a number between 0 (Sunday) and 6 (Saturday).');
    }

    // Calculate the day of the week for the given date
    const dayOfWeek = date.getDay();

    // Calculate the difference to the end of the week
    const diffToEndOfWeek = (6 - ((dayOfWeek - startOfWeek + 7) % 7));

    // Calculate the end of the week date
    const endOfWeekDate = new Date(date);
    endOfWeekDate.setDate(date.getDate() + diffToEndOfWeek);
    endOfWeekDate.setHours(23, 59, 59, 999);

    return endOfWeekDate;
}

// Example usage:
// const date = new Date('2024-09-19');
// getEndOfWeek(date); // Gets the Saturday of the week containing '2024-09-19'