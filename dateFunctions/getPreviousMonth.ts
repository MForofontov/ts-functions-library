/**
 * Gets the same day of the previous month for a given date.
 *
 * @param date - The Date object to start from.
 * @returns A new Date object representing the same day of the previous month.
 * @throws Will throw an error if the date is invalid.
 *
 * @example
 * const date = new Date('2023-12-31');
 * console.log(getPreviousMonth(date)); // 2023-11-30
 *
 */
export function getPreviousMonth(date: Date): Date {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const resultDate = new Date(date);
  resultDate.setMonth(date.getMonth() - 1);

  // Handle cases where the previous month has fewer days
  if (resultDate.getMonth() === date.getMonth()) {
    resultDate.setDate(0); // Set to the last day of the previous month
  }

  return resultDate;
}
