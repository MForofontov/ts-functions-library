/**
 * Gets the end date of the year for a given date.
 *
 * @param date - The Date object to get the year's end from.
 * @returns A new Date object representing the end of the year.
 * @throws Will throw an error if the date is invalid.
 *
 * @example
 * const date = new Date('2024-09-19');
 * getEndOfYear(date); // '2024-12-31'
 *
 */
export function getEndOfYear(date: Date): Date {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }
  return new Date(date.getFullYear(), 11, 31);
}
