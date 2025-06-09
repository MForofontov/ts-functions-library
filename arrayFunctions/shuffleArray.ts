/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 *
 * @param arr - The array to shuffle.
 * @returns The shuffled array.
 */
export function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5];
// shuffleArray(numbers); // [3, 1, 4, 5, 2] (output will vary)
