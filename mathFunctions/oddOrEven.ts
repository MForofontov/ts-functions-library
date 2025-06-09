/**
 * Determines if a number is odd or even.
 *
 * @param n - The number to check.
 * @returns "odd" if the number is odd, "even" if the number is even.
 * @throws Will throw an error if n is not an integer or if n is NaN.
 */
export function oddOrEven(n: number): string {
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  return n % 2 === 0 ? 'even' : 'odd';
}

// Example usage:
// console.log(oddOrEven(3)); // "odd"
// console.log(oddOrEven(4)); // "even"
