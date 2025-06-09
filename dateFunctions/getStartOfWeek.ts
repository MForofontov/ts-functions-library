/**
 * Gets the start date of the week for a given date.
 *
 * @param date - The Date object to get the week start from.
 * @param startOfWeek - The start day of the week (0 for Sunday, 1 for Monday, etc.).
 * @returns A new Date object representing the start of the week.
 * @throws Will throw an error if the date is invalid or if the startOfWeek is not between 0 and 6.
 */
export function getStartOfWeek(date: Date, startOfWeek: number = 0): Date {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  if (isNaN(startOfWeek) || startOfWeek < 0 || startOfWeek > 6) {
    throw new Error(
      'Invalid startOfWeek value. It must be a number between 0 (Sunday) and 6 (Saturday).',
    );
  }

  const diff = (date.getDay() - startOfWeek + 7) % 7;
  const startOfWeekDate = new Date(date);
  startOfWeekDate.setDate(date.getDate() - diff);
  startOfWeekDate.setHours(0, 0, 0, 0);
  return startOfWeekDate;
}

// Example usage:
// const date = new Date('2024-09-19');
// getStartOfWeek(date); // Gets the Sunday of the week containing '2024-09-19'
