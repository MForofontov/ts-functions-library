/**
 * Converts a local Date object to a UTC Date object.
 * 
 * @param date - The local Date object to convert.
 * @returns A new Date object representing the same moment in UTC.
 */
export function toUTCDate(date: Date): Date {
    return new Date(date.toUTCString());
}

// Example usage:
// const localDate = new Date('2024-09-19T15:45:30');
// toUTCDate(localDate); // e.g., '2024-09-19T15:45:30.000Z'
