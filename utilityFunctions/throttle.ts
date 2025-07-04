/**
 * Throttles a function, ensuring it is called at most once per specified interval.
 *
 * @param func - The function to throttle.
 * @param limit - The time interval in milliseconds.
 * @returns A throttled version of the function.
 */
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let lastFunc: NodeJS.Timeout | null;
  let lastRan: number | null = null;
  return function (...args: Parameters<T>) {
    const context = this;
    if (!lastRan || Date.now() - lastRan >= limit) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      if (lastFunc) {
        clearTimeout(lastFunc);
      }
      lastFunc = setTimeout(
        () => {
          func.apply(context, args);
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}

// Example usage:
// const throttledLog = throttle(() => console.log("Throttled!"), 1000);
// throttledLog(); // Logs at most once every second
