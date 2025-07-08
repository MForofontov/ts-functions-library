import { delay } from '../../utilityFunctions/delay';

describe('delay', () => {
  // Test case 1: Basic delay functionality
  it('1. should delay execution for specified milliseconds', async () => {
    const start = Date.now();
    await delay(100);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(95);
    expect(elapsed).toBeLessThan(200);
  });

  // Test case 2: Delay with zero milliseconds
  it('2. should resolve immediately with zero milliseconds', async () => {
    const start = Date.now();
    await delay(0);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeLessThan(50);
  });

  // Test case 3: Delay returns a promise
  it('3. should return a promise that resolves to undefined', async () => {
    const result = await delay(10);
    expect(result).toBeUndefined();
  });

  // Test case 4: Delay with small positive value
  it('4. should handle small positive delays correctly', async () => {
    const start = Date.now();
    await delay(1);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(0);
    expect(elapsed).toBeLessThan(100);
  });

  // Test case 5: Delay with larger value
  it('5. should handle larger delay values correctly', async () => {
    const start = Date.now();
    await delay(250);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(240);
    expect(elapsed).toBeLessThan(350);
  });

  // Test case 6: Multiple delays in sequence
  it('6. should handle multiple delays in sequence', async () => {
    const start = Date.now();
    await delay(50);
    await delay(50);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(95);
    expect(elapsed).toBeLessThan(200);
  });

  // Test case 7: Delay with Promise.all
  it('7. should work correctly with Promise.all', async () => {
    const start = Date.now();
    await Promise.all([delay(100), delay(100), delay(100)]);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(95);
    expect(elapsed).toBeLessThan(200);
  });

  // Test case 8: Delay with Promise.race
  it('8. should work correctly with Promise.race', async () => {
    const start = Date.now();
    await Promise.race([delay(50), delay(100), delay(150)]);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(45);
    expect(elapsed).toBeLessThan(100);
  });

  // Test case 9: Delay can be awaited multiple times
  it('9. should allow multiple awaits on same delay promise', async () => {
    const delayPromise = delay(100);
    const start = Date.now();
    
    await delayPromise;
    const mid = Date.now();
    
    await delayPromise;
    const end = Date.now();
    
    const elapsed1 = mid - start;
    const elapsed2 = end - mid;
    
    expect(elapsed1).toBeGreaterThanOrEqual(95);
    expect(elapsed2).toBeLessThan(10);
  });

  // Test case 10: Delay with fractional milliseconds
  it('10. should handle fractional milliseconds correctly', async () => {
    const start = Date.now();
    await delay(50.5);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(45);
    expect(elapsed).toBeLessThan(100);
  });

  // Test case 11: Delay with very large value
  it('11. should handle large delay values correctly', async () => {
    const start = Date.now();
    await delay(1000);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(995);
    expect(elapsed).toBeLessThan(1100);
  });

  // Test case 12: Delay maintains promise chain
  it('12. should maintain promise chain correctly', async () => {
    const result = await delay(10)
      .then(() => 'first')
      .then(value => `${value}-second`)
      .then(value => `${value}-third`);
    
    expect(result).toBe('first-second-third');
  });
});