/**
 * Limits the execution rate of a function to a specified delay (debounce).
 *
 * @param func - The function to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns A debounced version of the function.
 *
 * @example
 * const debouncedFunction = debounce(() => console.log('Debounced!'), 300);
 * debouncedFunction(); // Only executed after 300ms if not called again in that time
 *
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

