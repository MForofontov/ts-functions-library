/**
 * Debounces a promise-returning function.
 *
 * @param func - The async function to debounce.
 * @param wait - The debounce delay in milliseconds.
 * @returns A debounced version of the function.
 */
export function debounceAsync<T extends (...args: any[]) => Promise<any>>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) =>
    new Promise((resolve) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => resolve(func(...args)), wait);
    });
}

// Example usage:
// const fetchDebounced = debounceAsync(fetchData, 300);
// fetchDebounced(); // Only calls after 300ms of inactivity
