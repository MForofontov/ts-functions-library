/**
 * Checks if a given year is a leap year.
 * 
 * @param year - The year to check.
 * @returns True if the year is a leap year, false otherwise.
 * @throws Will throw an error if the year is not a number or is NaN.
 */
export function isLeapYear(year: number): boolean {
    if (isNaN(year)) {
        throw new TypeError('Year should be a number');
    }
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage:
// isLeapYear(2024); // true
// isLeapYear(2023); // false