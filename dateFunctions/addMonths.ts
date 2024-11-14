/**
 * Adds a specified number of months to a Date object.
 * 
 * @param date - The original Date object.
 * @param months - The number of months to add.
 * @returns A new Date object with the months added.
 * @throws Will throw an error if the date is invalid or if months is NaN.
 */
export function addMonths(date: Date, months: number): Date {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }
    if (isNaN(months)) {
        throw new Error('Months must be a number');
    }

    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}

// Example usage:
// const today = new Date();
// addMonths(today, 3); // Adds 3 months to the current date