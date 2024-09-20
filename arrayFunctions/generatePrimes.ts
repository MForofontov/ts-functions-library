import { isPrime } from '../mathFunctions/isPrime';
/**
 * Generates an array of prime numbers up to a specified limit.
 * 
 * @param limit - The upper limit to generate primes.
 * @returns An array of prime numbers up to the specified limit.
 */
export function generatePrimes(limit: number): number[] {
    const primes: number[] = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Example usage:
// generatePrimes(10); // [2, 3, 5, 7]