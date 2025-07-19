/**
 * Debounces a promise-returning function, resolving only after the
 * specified delay has elapsed since the last invocation.
 *
 * @param func - The async function to debounce.
 * @param wait - The debounce delay in milliseconds.
 * @returns A debounced version of the function.
 *
 * @example
 * // Basic usage
 * const fetchDebounced = debounceAsync(fetchData, 300);
 * fetchDebounced(); // Only calls after 300ms of inactivity
 *
 * @note Useful for rate-limiting API calls that return promises.
 * The timer resets on each call until the function stops being invoked.
 *
 * @complexity O(1) per invocation
 */
export function debounceAsync<Args extends unknown[], R>(
  func: (...args: Args) => Promise<R>,
  wait: number,
): (...args: Args) => Promise<R> {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Args) =>
    new Promise((resolve) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => resolve(func(...args)), wait);
    });
}
