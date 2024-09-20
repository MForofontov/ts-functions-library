/**
 * Gets the quarter of the year for a given Date object.
 * 
 * @param date - The Date object to get the quarter for.
 * @returns The quarter of the year (1-4).
 */
export function getQuarter(date: Date): number {
    const month = date.getMonth() + 1;
    return Math.ceil(month / 3);
}

// Example usage:
// const date = new Date('2024-09-19');
// getQuarter(date); // 3 (Q3)
