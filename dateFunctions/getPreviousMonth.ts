/**
 * Gets the date corresponding to the same day of the previous month.
 * 
 * @param date - The Date object to get the previous month's date from.
 * @returns A new Date object representing the same day in the previous month.
 * @throws Will throw an error if the date is invalid.
 */
export function getPreviousMonth(date: Date): Date {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    const result = new Date(date);
    result.setMonth(result.getMonth() - 1);
    return result;
}

// Example usage:
// const today = new Date();
// getPreviousMonth(today); // Date for the same day last month