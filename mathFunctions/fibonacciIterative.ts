/**
 * Calculates the nth Fibonacci number using an iterative approach.
 *
 * @param n - The position in the Fibonacci sequence.
 * @returns The nth Fibonacci number.
 * @throws Will throw an error if n is not an integer or if n is NaN.
 *
 * @example
 * fibonacciIterative(6); // 8
 *
 */
export function fibonacciIterative(n: number): number {
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  if (n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  let a = 0,
    b = 1,
    temp;
  for (let i = 1; i < n; i++) {
    temp = a;
    a = b;
    b = temp + b;
  }
  return n === 0 ? 0 : b;
}

