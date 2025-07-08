/**
 * Converts a local Date object to a UTC Date object.
 *
 * @param date - The local Date object to convert.
 * @returns A new Date object representing the same moment in UTC.
 * @throws Will throw an error if the date is invalid.
 *
 * @example
 * const localDate = new Date('2024-09-19T15:45:30');
 * toUTCDate(localDate); // e.g., '2024-09-19T15:45:30.000Z'
 *
 */
export function toUTCDate(date: Date): Date {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ),
  );
}

