/**
 * Gets the last date of the month for a given date.
 *
 * @param date - The Date object to get the month's end date from.
 * @returns A new Date object representing the last day of the month.
 * @throws Will throw an error if the date is invalid.
 *
 * @example
 * const date = new Date('2024-09-15');
 * getEndOfMonth(date); // Gets '2024-09-30'
 *
 */
export function getEndOfMonth(date: Date): Date {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDay;
}

