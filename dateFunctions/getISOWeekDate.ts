/**
 * Gets the ISO week date (YYYY-Www-D) for a given Date object.
 *
 * @param date - The Date object to get the ISO week date for.
 * @returns The ISO week date as a string.
 * @throws Will throw an error if the date is invalid.
 *
 * @example
 * const date = new Date('2024-09-19');
 * console.log(getISOWeekDate(date)); // e.g., '2024-W38-4'
 *
 */
export function getISOWeekDate(date: Date): string {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }
  if (date.getFullYear() < 0) {
    throw new Error('Negative years are not supported');
  }

  // ISO week date calculation
  const tempDate = new Date(date.getTime());
  tempDate.setHours(0, 0, 0, 0);
  tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));
  const week1 = new Date(tempDate.getFullYear(), 0, 4);
  const weekNumber =
    Math.round(
      ((tempDate.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7,
    ) + 1;

  let year: string;
  const fullYear = tempDate.getFullYear();
  if (fullYear < 0) {
    year = `-${String(Math.abs(fullYear)).padStart(6, '0')}`;
  } else {
    year = String(fullYear).padStart(4, '0');
  }
  const dayOfWeek = date.getDay() || 7; // ISO week starts on Monday, so Sunday should be 7

  return `${year}-W${String(weekNumber).padStart(2, '0')}-${dayOfWeek}`;
}
