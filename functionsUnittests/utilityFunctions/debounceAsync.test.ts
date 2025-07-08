import { debounceAsync } from '../../utilityFunctions/debounceAsync';

describe('debounceAsync', () => {
  // Test case 1: Basic debounce async functionality
  it('1. should debounce async function calls correctly', async () => {
    let callCount = 0;
    const mockAsyncFunction = async () => {
      callCount++;
      return 'result';
    };
    const debouncedFunction = debounceAsync(mockAsyncFunction, 50);

    const promise1 = debouncedFunction();
    const promise2 = debouncedFunction();
    const promise3 = debouncedFunction();

    expect(callCount).toBe(0);

    const result = await promise3;
    expect(result).toBe('result');
    expect(callCount).toBe(1);
  });

  // Test case 2: Debounce async with parameters
  it('2. should pass parameters to debounced async function', async () => {
    const mockAsyncFunction = async (param1: string, param2: number) => {
      return `${param1}-${param2}`;
    };
    const debouncedFunction = debounceAsync(mockAsyncFunction, 50);

    const result = await debouncedFunction('test', 123);

    expect(result).toBe('test-123');
  });

  // Test case 3: Debounce async with zero delay
  it('3. should handle zero delay correctly', async () => {
    const mockAsyncFunction = async () => 'result';
    const debouncedFunction = debounceAsync(mockAsyncFunction, 0);

    const result = await debouncedFunction();

    expect(result).toBe('result');
  });

  // Test case 4: Debounce async with different parameter types
  it('4. should handle different parameter types correctly', async () => {
    const mockAsyncFunction = async (...args: any[]) => args;
    const debouncedFunction = debounceAsync(mockAsyncFunction, 50);

    const result = await debouncedFunction(null, undefined, true, false, 0, '', {}, []);

    expect(result).toEqual([null, undefined, true, false, 0, '', {}, []]);
  });

  // Test case 5: Debounce async with promise rejection
  it('5. should handle promise rejection correctly', async () => {
    const mockAsyncFunction = async () => {
      throw new Error('Test error');
    };
    const debouncedFunction = debounceAsync(mockAsyncFunction, 50);

    await expect(debouncedFunction()).rejects.toThrow('Test error');
  });

  // Test case 6: Debounce async with very short delay
  it('6. should handle very short delays correctly', async () => {
    const mockAsyncFunction = async () => 'result';
    const debouncedFunction = debounceAsync(mockAsyncFunction, 1);

    const result = await debouncedFunction();

    expect(result).toBe('result');
  });

  // Test case 7: Debounce async called many times rapidly
  it('7. should handle rapid successive calls correctly', async () => {
    let callCount = 0;
    const mockAsyncFunction = async () => {
      callCount++;
      return 'result';
    };
    const debouncedFunction = debounceAsync(mockAsyncFunction, 50);

    const promises = [];
    for (let i = 0; i < 5; i++) {
      promises.push(debouncedFunction());
    }

    const results = await Promise.all(promises);
    expect(callCount).toBe(1);
    expect(results).toEqual(Array(5).fill('result'));
  });

  // Test case 8: Debounce async with complex return type
  it('8. should handle complex return types correctly', async () => {
    const complexResult = { data: [1, 2, 3], status: 'success' };
    const mockAsyncFunction = async () => complexResult;
    const debouncedFunction = debounceAsync(mockAsyncFunction, 50);

    const result = await debouncedFunction();

    expect(result).toEqual(complexResult);
  });
});