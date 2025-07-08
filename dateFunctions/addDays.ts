/**
 * Adds a specified number of days to a Date object.
 *
 * @param date - The original Date object.
 * @param days - The number of days to add.
 * @returns A new Date object with the days added.
 * @throws Will throw an error if the date is invalid or if days is NaN.
 *
 * @example
 * const today = new Date();
 * addDays(today, 10); // Adds 10 days to the current date
 *
 */
export function addDays(date: Date, days: number): Date {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }
  if (isNaN(days)) {
    throw new Error('Days must be a number');
  }

  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

