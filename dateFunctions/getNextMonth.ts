/**
 * Gets the date corresponding to the same day of the next month.
 * 
 * @param date - The Date object to get the next month's date from.
 * @returns A new Date object representing the same day in the next month.
 * @throws Will throw an error if the date is invalid.
 */
export function getNextMonth(date: Date): Date {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    const result = new Date(date);
    result.setMonth(result.getMonth() + 1);
    return result;
}

// Example usage:
// const today = new Date();
// getNextMonth(today); // Date for the same day next month