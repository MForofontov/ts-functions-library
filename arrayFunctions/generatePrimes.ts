// generatePrimes.ts
export function generatePrimes(limit: number): number[] {
  if (limit < 2) return [];
  if (!Number.isInteger(limit)) {
    throw new RangeError('Limit must be an integer');
  }

  const sieve: boolean[] = new Array(limit + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// Example usage:
// generatePrimes(10); // [2, 3, 5, 7]
