/**
 * Calculates the number of business days (Monday to Friday) between two dates.
 * 
 * @param start - The start Date object.
 * @param end - The end Date object.
 * @returns The number of business days between the two dates.
 */
export function businessDaysBetween(start: Date, end: Date): number {
    let count = 0;
    const currentDate = new Date(start);

    while (currentDate <= end) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            count++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return count;
}

// Example usage:
// const start = new Date('2024-09-01');
// const end = new Date('2024-09-30');
// businessDaysBetween(start, end); // Number of business days in September 2024
