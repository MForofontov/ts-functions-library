/**
 * Throttles a function, ensuring it is called at most once per specified interval.
 *
 * @param func - The function to throttle.
 * @param limit - The time interval in milliseconds.
 * @returns A throttled version of the function.
 *
 * @example
 * // Basic usage
 * const throttledLog = throttle(() => console.log('Throttled!'), 1000);
 * throttledLog(); // Logs at most once every second
 *
 * @note Uses timestamps to track last execution and setTimeout for trailing calls.
 *
 * @complexity O(1) per invocation
 */
export function throttle<Args extends unknown[]>(
  func: (...args: Args) => void,
  limit: number,
): (...args: Args) => void {
  let lastFunc: NodeJS.Timeout | null;
  let lastRan: number | null = null;
  return function (this: unknown, ...args: Args) {
    if (!lastRan || Date.now() - lastRan >= limit) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      if (lastFunc) {
        clearTimeout(lastFunc);
      }
      lastFunc = setTimeout(
        () => {
          func.apply(this, args);
          lastRan = Date.now();
          lastFunc = null;
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}
