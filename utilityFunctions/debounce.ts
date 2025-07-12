/**
 * Limits the execution rate of a function by delaying calls until after
 * a specified wait period.
 *
 * @param func - The function to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns A debounced version of the function.
 *
 * @example
 * // Basic usage
 * const debouncedFunction = debounce(() => console.log('Debounced!'), 300);
 * debouncedFunction(); // Only executed after 300ms if not called again
 *
 * @note Utilises setTimeout to postpone function execution.
 * Subsequent calls reset the timer so only the last invocation runs.
 *
 * @complexity O(1) per invocation
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: unknown, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
