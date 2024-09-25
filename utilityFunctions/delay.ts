/**
 * Returns a promise that resolves after a specified delay.
 * 
 * @param ms - The delay in milliseconds.
 * @returns A promise that resolves after the delay.
 */
export function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Example usage:
// delay(2000).then(() => console.log("Waited 2 seconds"));