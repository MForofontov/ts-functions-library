/**
 * Calculates the percentage of a number.
 *
 * @param total - The total value.
 * @param part - The part value to calculate the percentage of.
 * @returns The percentage of the part with respect to the total.
 *
 * @example
 * calculatePercentage(200, 50); // 25
 *
 */
export function calculatePercentage(total: number, part: number): number {
  return (part / total) * 100;
}

