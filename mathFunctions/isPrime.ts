/**
 * Checks if a number is a prime number.
 * 
 * @param n - The number to check.
 * @returns True if the number is prime, false otherwise.
 */
export function isPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Example usage:
// isPrime(7); // true
// isPrime(10); // false