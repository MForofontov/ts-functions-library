/**
 * Calculates the number of business days (Monday to Friday) between two dates.
 *
 * @param start - The start Date object.
 * @param end - The end Date object.
 * @returns The number of business days between the two dates.
 * @throws Will throw an error if the start or end date is invalid.
 *
 * @example
 * const start = new Date('2024-09-01');
 * const end = new Date('2024-09-30');
 * businessDaysBetween(start, end); // Number of business days in September 2024
 *
 */
export function businessDaysBetween(start: Date, end: Date): number {
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error('Invalid date');
  }

  if (start > end) {
    throw new Error('Start date must be before end date');
  }

  let count = 0;
  const currentDate = new Date(start);

  while (currentDate <= end) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Exclude Sundays (0) and Saturdays (6)
      count++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return count;
}

