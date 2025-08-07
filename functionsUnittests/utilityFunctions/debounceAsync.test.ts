import { debounceAsync } from '../../utilityFunctions/debounceAsync';

describe('debounceAsync', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // Test case 1: Resolve with function result after delay
  it('1. should resolve with the function result after the delay', async () => {
    const fn = jest.fn(async (n: number) => n * 2);
    const debounced = debounceAsync(fn, 50);
    const promise = debounced(2);
    jest.advanceTimersByTime(50);
    await expect(promise).resolves.toBe(4);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  // Test case 2: Execute only the last call
  it('2. should execute only the last call made before the delay', async () => {
    const fn = jest.fn(async (n: number) => n);
    const debounced = debounceAsync(fn, 50);
    debounced(1);
    const promise = debounced(2);
    jest.advanceTimersByTime(50);
    await expect(promise).resolves.toBe(2);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  // Test case 3: Pass arguments correctly
  it('3. should pass arguments correctly', async () => {
    const fn = jest.fn(async (a: number, b: number) => a + b);
    const debounced = debounceAsync(fn, 50);
    const promise = debounced(1, 2);
    jest.advanceTimersByTime(50);
    await expect(promise).resolves.toBe(3);
  });

  // Test case 4: Propagate rejection
  it('4. should propagate rejection from the underlying function', async () => {
    const fn = jest.fn(async () => {
      throw new Error('fail');
    });
    const debounced = debounceAsync(fn, 50);
    const promise = debounced();
    jest.advanceTimersByTime(50);
    await expect(promise).rejects.toThrow('fail');
  });

  // Test case 5: Work with zero wait time
  it('5. should work with zero wait time', async () => {
    const fn = jest.fn(async () => 'done');
    const debounced = debounceAsync(fn, 0);
    const promise = debounced();
    jest.runAllTimers();
    await expect(promise).resolves.toBe('done');
  });
});
