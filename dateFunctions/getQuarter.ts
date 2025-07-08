/**
 * Gets the quarter of the year for a given Date object.
 *
 * @param date - The Date object to get the quarter for.
 * @returns The quarter of the year (1-4).
 * @throws Will throw an error if the date is invalid.
 *
 * @example
 * const date = new Date('2024-09-19');
 * getQuarter(date); // 3 (Q3)
 *
 */
export function getQuarter(date: Date): number {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const month = date.getMonth() + 1;
  return Math.ceil(month / 3);
}

