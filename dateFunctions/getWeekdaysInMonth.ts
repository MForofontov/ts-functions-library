/**
 * Gets the number of weekdays (Monday to Friday) in a given month.
 *
 * @param date - The Date object representing the month to calculate weekdays for.
 * @returns The number of weekdays in the month.
 *
 * @example
 * const date = new Date('2024-09-01');
 * getWeekdaysInMonth(date); // Number of weekdays in September 2024
 *
 */
export function getWeekdaysInMonth(date: Date): number {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  let weekdayCount = 0;

  // Loop through all days of the month
  for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
    const currentDay = new Date(year, month, day).getDay();
    // Check if the day is Monday to Friday
    if (currentDay >= 1 && currentDay <= 5) {
      weekdayCount++;
    }
  }

  return weekdayCount;
}

