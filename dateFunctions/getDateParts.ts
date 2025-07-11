/**
 * Gets various parts of a Date object.
 *
 * @param date - The Date object to extract parts from.
 * @returns An object containing year, month, day, hours, minutes, and seconds.
 *
 * @example
 * const date = new Date('2024-09-19T15:45:30');
 * getDateParts(date); // { year: 2024, month: 9, day: 19, hours: 15, minutes: 45, seconds: 30 }
 *
 */
export function getDateParts(date: Date): {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}
