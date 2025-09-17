/**
 * Maps over an array asynchronously, applying an async function to each element.
 *
 * @param array - The array to map over.
 * @param asyncFn - The async function to apply to each element.
 * @param concurrency - Maximum number of concurrent operations (default: 5).
 * @returns Promise that resolves with array of mapped results.
 *
 * @throws {TypeError} If array is not an array or asyncFn is not a function.
 * @throws {Error} If concurrency is less than 1.
 *
 * @example
 * // Basic async map
 * const results = await asyncMap(
 *   [1, 2, 3, 4, 5],
 *   async (num) => {
 *     const response = await fetch(`/api/data/${num}`);
 *     return response.json();
 *   }
 * );
 *
 * @example
 * // With custom concurrency
 * const results = await asyncMap(
 *   ['file1.txt', 'file2.txt', 'file3.txt'],
 *   async (filename) => {
 *     const content = await readFile(filename);
 *     return content.length;
 *   },
 *   2 // Only process 2 files at a time
 * );
 *
 * @example
 * // Processing user data
 * const enrichedUsers = await asyncMap(
 *   userIds,
 *   async (userId) => {
 *     const user = await getUser(userId);
 *     const preferences = await getUserPreferences(userId);
 *     return { ...user, preferences };
 *   }
 * );
 *
 * @note Results maintain the same order as the input array.
 *
 * @complexity Time: O(n/c) where n is array length and c is concurrency, Space: O(n)
 */
export async function asyncMap<T, R>(
  array: T[],
  asyncFn: (item: T, index: number) => Promise<R>,
  concurrency: number = 5,
): Promise<R[]> {
  if (!Array.isArray(array)) {
    throw new TypeError(`array must be an array, got ${typeof array}`);
  }

  if (typeof asyncFn !== 'function') {
    throw new TypeError(`asyncFn must be a function, got ${typeof asyncFn}`);
  }

  if (typeof concurrency !== 'number' || isNaN(concurrency)) {
    throw new TypeError(`concurrency must be a number, got ${typeof concurrency}`);
  }

  if (concurrency < 1) {
    throw new Error(`concurrency must be at least 1, got ${concurrency}`);
  }

  if (array.length === 0) {
    return [];
  }

  // For small arrays or high concurrency, just use Promise.all
  if (array.length <= concurrency) {
    return Promise.all(array.map(asyncFn));
  }

  const results: R[] = [];
  const executing: Promise<void>[] = [];

  for (let i = 0; i < array.length; i++) {
    const promise = asyncFn(array[i], i).then((result) => {
      results[i] = result;
    });

    executing.push(promise);

    // If we've reached the concurrency limit, wait for one to complete
    if (executing.length >= concurrency) {
      await Promise.race(executing);
      // Remove completed promises
      for (let j = executing.length - 1; j >= 0; j--) {
        const isResolved = await Promise.race([
          executing[j],
          Promise.resolve('__resolved__'),
        ]);
        if (isResolved === '__resolved__') {
          executing.splice(j, 1);
        }
      }
    }
  }

  // Wait for all remaining operations to complete
  await Promise.all(executing);

  return results;
}
