/**
 * Compares two Date objects.
 *
 * @param date1 - The first Date object.
 * @param date2 - The second Date object.
 * @returns -1 if date1 is before date2, 1 if date1 is after date2, and 0 if they are the same.
 * @throws Will throw an error if either date is invalid.
 */
export function compareDates(date1: Date, date2: Date): number {
  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    throw new Error('Invalid date');
  }

  if (date1 < date2) {
    return -1;
  } else if (date1 > date2) {
    return 1;
  } else {
    return 0;
  }
}

// Example usage:
// const date1 = new Date('2024-09-19');
// const date2 = new Date('2024-09-20');
// compareDates(date1, date2); // -1
