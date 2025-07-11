/**
 * Gets the number of days left in the current year from a given date.
 *
 * @param date - The Date object to calculate the remaining days from.
 * @returns The number of days left in the current year.
 * @throws Will throw an error if the date is invalid.
 *
 * @example
 * const today = new Date();
 * daysLeftInYear(today); // Number of days left in the year from today
 *
 */
export function daysLeftInYear(date: Date): number {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const endOfYear = new Date(date.getFullYear(), 11, 31);
  const diffInMs = endOfYear.getTime() - date.getTime();
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
}
