/**
 * Gets the week number of the year for a given date.
 *
 * @param date - The Date object to get the week number for.
 * @returns The week number of the year.
 * @throws Will throw an error if the date is invalid.
 *
 * @example
 * const date = new Date('2024-09-19');
 * getWeekNumber(date); // e.g., 38
 *
 */
export function getWeekNumber(date: Date): number {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const start = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor(
    (date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000),
  );
  return Math.ceil((days + start.getDay() + 1) / 7);
}

