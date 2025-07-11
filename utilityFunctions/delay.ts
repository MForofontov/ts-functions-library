/**
 * Returns a promise that resolves after a specified delay.
 *
 * @param ms - The delay in milliseconds.
 * @returns A promise that resolves after the delay.
 *
 * @example
 * // Basic usage
 * delay(2000).then(() => console.log('Waited 2 seconds'));
 *
 * @note Implements a simple wrapper around setTimeout.
 * Useful for pausing execution in async workflows.
 *
 * @complexity O(1)
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
