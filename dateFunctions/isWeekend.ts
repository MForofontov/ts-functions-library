/**
 * Checks if a given date is a weekend.
 *
 * @param date - The Date object to check.
 * @returns True if the date is a Saturday or Sunday, false otherwise.
 * @throws Will throw an error if the date is invalid.
 */
export function isWeekend(date: Date): boolean {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }
  const day = date.getDay();
  return day === 0 || day === 6;
}

// Example usage:
// const date = new Date('2024-09-21'); // Saturday
// isWeekend(date); // true
