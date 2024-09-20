/**
 * Gets the date exactly one week before a given Date object.
 * 
 * @param date - The Date object to subtract one week from.
 * @returns A new Date object representing the date one week ago.
 */
export function oneWeekAgo(date: Date): Date {
    const result = new Date(date);
    result.setDate(result.getDate() - 7);
    return result;
}

// Example usage:
// const today = new Date();
// oneWeekAgo(today); // Date one week before today
