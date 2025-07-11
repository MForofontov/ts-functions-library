/**
 * Checks if a given year is a leap year.
 *
 * @param year - The year to check.
 * @returns True if the year is a leap year, false otherwise.
 * @throws Will throw an error if the year is NaN.
 *
 * @example
 * isLeapYear(2024); // true
 * isLeapYear(2023); // false
 *
 */
export function isLeapYear(year: number): boolean {
  if (isNaN(year)) {
    throw new Error('Year should be a valid number');
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
