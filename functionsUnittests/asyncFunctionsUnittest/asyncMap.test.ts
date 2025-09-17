import { asyncMap } from '../../asyncFunctions/asyncMap';

/**
 * Unit tests for the asyncMap function.
 */
describe('asyncMap', () => {
  // Test case 1: Normal/happy path
  it('1. should map array elements using async function', async () => {
    // Arrange
    const numbers = [1, 2, 3, 4, 5];
    const doubleAsync = async (num: number) => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      return num * 2;
    };

    // Act
    const result = await asyncMap(numbers, doubleAsync);

    // Assert
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  // Test case 2: Empty array
  it('2. should handle empty array', async () => {
    // Arrange
    const emptyArray: number[] = [];
    const mockFn = jest.fn().mockResolvedValue('test');

    // Act
    const result = await asyncMap(emptyArray, mockFn);

    // Assert
    expect(result).toEqual([]);
    expect(mockFn).not.toHaveBeenCalled();
  });

  // Test case 3: Function receives correct arguments
  it('3. should pass item and index to async function', async () => {
    // Arrange
    const items = ['a', 'b', 'c'];
    const mockFn = jest.fn().mockImplementation(async (item: string, index: number) => {
      return `${item}-${index}`;
    });

    // Act
    const result = await asyncMap(items, mockFn);

    // Assert
    expect(result).toEqual(['a-0', 'b-1', 'c-2']);
    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn).toHaveBeenNthCalledWith(1, 'a', 0);
    expect(mockFn).toHaveBeenNthCalledWith(2, 'b', 1);
    expect(mockFn).toHaveBeenNthCalledWith(3, 'c', 2);
  });

  // Test case 4: Error handling
  it('4. should propagate errors from async function', async () => {
    // Arrange
    const numbers = [1, 2, 3];
    const errorFn = async (num: number) => {
      if (num === 2) {
        throw new Error('Error on second item');
      }
      return num * 2;
    };

    // Act & Assert
    await expect(asyncMap(numbers, errorFn)).rejects.toThrow('Error on second item');
  });

  // Test case 5: TypeError for invalid input types
  it('5. should throw TypeError for invalid input types', () => {
    // Arrange
    const invalidInputs = [123, null, undefined, {}, true, 'string'];
    const mockFn = jest.fn().mockResolvedValue('test');

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() => asyncMap(input as any, mockFn)).toThrow(TypeError);
      expect(() => asyncMap(input as any, mockFn)).toThrow(
        'array must be an array, got'
      );
    });
  });

  // Test case 6: TypeError for invalid async function
  it('6. should throw TypeError for invalid async function', () => {
    // Arrange
    const validArray = [1, 2, 3];
    const invalidFunctions = [123, null, undefined, {}, true, 'string', []];

    // Act & Assert
    invalidFunctions.forEach((fn) => {
      expect(() => asyncMap(validArray, fn as any)).toThrow(TypeError);
      expect(() => asyncMap(validArray, fn as any)).toThrow(
        'asyncFn must be a function, got'
      );
    });
  });

  // Test case 7: Invalid concurrency
  it('7. should throw TypeError for invalid concurrency', () => {
    // Arrange
    const validArray = [1, 2, 3];
    const validFn = jest.fn().mockResolvedValue('test');
    const invalidConcurrency = [null, undefined, {}, true, 'string', [], NaN];

    // Act & Assert
    invalidConcurrency.forEach((concurrency) => {
      expect(() => asyncMap(validArray, validFn, concurrency as any)).toThrow(TypeError);
      expect(() => asyncMap(validArray, validFn, concurrency as any)).toThrow(
        'concurrency must be a number, got'
      );
    });

    expect(() => asyncMap(validArray, validFn, 0)).toThrow(Error);
    expect(() => asyncMap(validArray, validFn, 0)).toThrow(
      'concurrency must be at least 1, got 0'
    );
  });

  // Test case 8: Performance test with concurrency
  it('8. should process items with respect to concurrency limit', async () => {
    // Arrange
    const items = [1, 2, 3, 4, 5, 6];
    let activeCount = 0;
    let maxActiveCount = 0;
    
    const slowFn = async (num: number) => {
      activeCount++;
      maxActiveCount = Math.max(maxActiveCount, activeCount);
      await new Promise((resolve) => setTimeout(resolve, 50));
      activeCount--;
      return num * 2;
    };

    // Act
    const result = await asyncMap(items, slowFn, 3);

    // Assert
    expect(result).toEqual([2, 4, 6, 8, 10, 12]);
    expect(maxActiveCount).toBeLessThanOrEqual(3);
  });

  // Test case 9: Small array should use Promise.all
  it('9. should use Promise.all for small arrays', async () => {
    // Arrange
    const items = [1, 2];
    const mockFn = jest.fn().mockImplementation(async (num: number) => num * 2);

    // Act
    const result = await asyncMap(items, mockFn, 5);

    // Assert
    expect(result).toEqual([2, 4]);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  // Test case 10: Different data types
  it('10. should handle different input and output types', async () => {
    // Arrange
    const strings = ['hello', 'world', 'test'];
    const lengthFn = async (str: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      return str.length;
    };

    // Act
    const result = await asyncMap(strings, lengthFn);

    // Assert
    expect(result).toEqual([5, 5, 4]);
  });
});
