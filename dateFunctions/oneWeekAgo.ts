/**
 * Gets the date exactly one week before a given Date object.
 *
 * @param date - The Date object to subtract one week from.
 * @returns A new Date object representing the date one week ago.
 * @throws Will throw an error if the date is invalid.
 *
 * @example
 * const today = new Date();
 * oneWeekAgo(today); // Date one week before today
 *
 */
export function oneWeekAgo(date: Date): Date {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }
  const result = new Date(date);
  result.setDate(result.getDate() - 7);
  return result;
}

