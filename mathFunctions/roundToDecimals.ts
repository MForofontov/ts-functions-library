/**
 * Rounds a number to a specified number of decimal places.
 * 
 * @param value - The number to round.
 * @param decimals - The number of decimal places.
 * @returns The rounded number.
 * @throws Will throw an error if value or decimals is NaN, if decimals is not an integer, or if decimals is negative.
 */
export function roundToDecimals(value: number, decimals: number): number {
    if (isNaN(value) || isNaN(decimals)) {
        throw new Error('Both value and decimals must be numbers');
    }
    if (!Number.isInteger(decimals)) {
        throw new Error('Decimals must be an integer');
    }
    if (decimals < 0) {
        throw new Error('Decimals must be a non-negative integer');
    }
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

// Example usage:
// roundToDecimals(5.6789, 2); // 5.68