/**
 * Checks if a number is a prime number.
 * 
 * @param n - The number to check.
 * @returns True if the number is prime, false otherwise.
 * @throws Will throw an error if n is NaN.
 */
export function isPrime(n: number): boolean {
    if (isNaN(n)) {
        throw new Error('Input must be a number');
    }
    if (!Number.isInteger(n) || n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
// isPrime(7); // true
// isPrime(10); // false