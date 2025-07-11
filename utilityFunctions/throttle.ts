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
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let lastFunc: NodeJS.Timeout | null;
  let lastRan: number | null = null;
  return function (this: any, ...args: Parameters<T>) {
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
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}
