/**
 * Splits an array into chunks of a specified size.
 *
 * @param arr - The array to be split into chunks.
 * @param size - The size of each chunk (must be greater than 0).
 * @returns A two-dimensional array with the elements divided into chunks.
 * @throws Error if the size is less than or equal to 0.
 */
export function chunkArray<T>(arr: T[], size: number): T[][] {
  if (size <= 0) {
    throw new Error('Chunk size must be greater than 0.');
  }

  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// chunkArray(numbers, 3); // [[1, 2, 3], [4, 5, 6], [7]]
