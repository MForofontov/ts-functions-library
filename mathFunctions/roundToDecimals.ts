/**
 * Rounds a number to a specified number of decimal places.
 * 
 * @param value - The number to round.
 * @param decimals - The number of decimal places.
 * @returns The rounded number.
 */
export function roundToDecimals(value: number, decimals: number): number {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

// Example usage:
// roundToDecimals(5.6789, 2); // 5.68