/**
 * Executes an array of async functions in parallel with concurrency control.
 *
 * @param tasks - Array of async functions to execute.
 * @param concurrency - Maximum number of concurrent executions (default: 5).
 * @returns Promise that resolves with array of results in the same order as input tasks.
 *
 * @throws {TypeError} If tasks is not an array or concurrency is not a number.
 * @throws {Error} If concurrency is less than 1 or tasks array contains non-functions.
 *
 * @example
 * // Basic parallel execution with default concurrency
 * const results = await asyncParallel([
 *   async () => fetch('/api/user/1').then(r => r.json()),
 *   async () => fetch('/api/user/2').then(r => r.json()),
 *   async () => fetch('/api/user/3').then(r => r.json()),
 * ]); // Executes up to 5 concurrently
 *
 * @example
 * // Custom concurrency limit
 * const results = await asyncParallel([
 *   async () => heavyComputation(1),
 *   async () => heavyComputation(2),
 *   async () => heavyComputation(3),
 *   async () => heavyComputation(4),
 * ], 2); // Only 2 concurrent executions
 *
 * @example
 * // With mixed async operations
 * const results = await asyncParallel([
 *   async () => databaseQuery('SELECT * FROM users'),
 *   async () => cacheGet('config'),
 *   async () => externalApiCall('/data'),
 * ], 3);
 *
 * @note Results are returned in the same order as input tasks, regardless of completion order.
 *
 * @complexity Time: O(n/c) where n is number of tasks and c is concurrency, Space: O(n)
 */
export async function asyncParallel<T>(
  tasks: Array<() => Promise<T>>,
  concurrency: number = 5,
): Promise<T[]> {
  if (!Array.isArray(tasks)) {
    throw new TypeError(`tasks must be an array, got ${typeof tasks}`);
  }

  if (typeof concurrency !== 'number' || isNaN(concurrency)) {
    throw new TypeError(`concurrency must be a number, got ${typeof concurrency}`);
  }

  if (concurrency < 1) {
    throw new Error(`concurrency must be at least 1, got ${concurrency}`);
  }

  // Validate all tasks are functions
  tasks.forEach((task, index) => {
    if (typeof task !== 'function') {
      throw new Error(
        `Task at index ${index} must be a function, got ${typeof task}`,
      );
    }
  });

  if (tasks.length === 0) {
    return [];
  }

  const results: T[] = new Array(tasks.length);
  const executing: Promise<void>[] = [];
  let index = 0;

  const executeTask = async (taskIndex: number): Promise<void> => {
    try {
      results[taskIndex] = await tasks[taskIndex]();
    } catch (error) {
      throw error;
    }
  };

  while (index < tasks.length) {
    // Start task execution
    const taskPromise = executeTask(index);
    executing.push(taskPromise);
    
    index++;

    // If we've reached concurrency limit, wait for one to complete
    if (executing.length >= concurrency) {
      await Promise.race(executing);
      // Remove completed promises
      const completedIndexes: number[] = [];
      for (let i = 0; i < executing.length; i++) {
        if (await Promise.race([executing[i], Promise.resolve('__completed__')]) === '__completed__') {
          completedIndexes.push(i);
        }
      }
      completedIndexes.reverse().forEach(i => executing.splice(i, 1));
    }
  }

  // Wait for all remaining tasks to complete
  await Promise.all(executing);

  return results;
}
